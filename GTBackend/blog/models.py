from django.db import models
from users.models import User
from django.utils import timezone
from django.utils.text import slugify
from django.utils.safestring import mark_safe

class Car(models.Model):
    manufacturer = models.CharField(max_length=100)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class TuningSheet(models.Model):

    class TuningSheetObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status=TuningSheet.PUBLISHED)

    DRAFT = "Draft"
    PUBLISHED = "Published"
    STATUS_OPTIONS = (
        (DRAFT, 'Draft'),
        (PUBLISHED, 'Published'),
    )
    car = models.ForeignKey(
        Car, on_delete=models.PROTECT, default=1)
    title = models.CharField(max_length=250)
    photo = models.ImageField(upload_to='car_photos', null=True, blank=True)
    # upload_to tells django to store the picture in car_photos under the media directory
    excerpt = models.TextField(null=True)
    slug = models.SlugField(max_length=250, unique_for_date="published", blank=True)
    # used for URLs
    published = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='tuning_sheets'
    )
    status = models.CharField(
        max_length=10, choices=STATUS_OPTIONS, default=PUBLISHED)
    objects = models.Manager() # default manager
    # https://docs.djangoproject.com/en/4.1/topics/db/managers/
    # custom manager modifying a manager's initial queryset
    # tuningsheet.tuningsheetobjects.all() returns all tuning sheets published
    tuningsheetobjects = TuningSheetObjects() 

    # ==================== GENERAL CAR INFO ====================
    performance_points = models.DecimalField(max_digits=5, decimal_places=2)

    # ==================== TYRE CHOICES ====================
    CH = "Comfort: Hard (CH)"
    CM = "Comfort: Medium (CM)"
    CS = "Comfort: Soft (CS)"
    SH = "Sports: Hard (SH)"
    SM = "Sports: Medium (SM)"
    SS = "Sports: Soft (SS)"
    RH = "Racing: Hard (RH)"
    RM = "Racing: Medium (RM)"
    RS = "Racing: Soft (RS)"
    RI = "Racing: Intermediate"
    RHW = "Racing: Heavy Wet"
    D = "Dirt"
    TYRE_CHOICES = (
        (CH, "Comfort: Hard (CH)"),
        (CM, "Comfort: Medium (CM)"),
        (CS, "Comfort: Soft (CS)"),
        (SH, "Sports: Hard (SH)"),
        (SM, "Sports: Medium (SM)"),
        (SS, "Sports: Soft (SS)"),
        (RH, "Racing: Hard (RH)"),
        (RM, "Racing: Medium (RM)"),
        (RS, "Racing: Soft (RS)"),
        (RI, "Racing: Intermediate"),
        (RHW, "Racing: Heavy Wet"),
        (D, "Dirt"),
    )
    tyres_front = models.CharField(
        max_length=25, choices=TYRE_CHOICES, default=CH
    )
    tyres_rear = models.CharField(
        max_length=25, choices=TYRE_CHOICES, default=CH
    )

    # ==================== SUSPENSION ====================
    SUS_NORMAL = "Normal"
    SUS_SPORTS = "Sports Suspension"
    SUS_HEIGHT_ADJ = "Height-Adjustable Sports"
    SUS_FULL = "Fully Customized Suspension"
    SUS_CHOICES = (
        (SUS_NORMAL, "Normal"),
        (SUS_SPORTS, "Sports Suspension"),
        (SUS_HEIGHT_ADJ, "Height-Adjustable Sports"),
        (SUS_FULL, "Fully Customized Suspension"),
    )
    suspension = models.CharField(
        max_length=50, choices=SUS_CHOICES, default=SUS_NORMAL
    )
    height_front = models.IntegerField(help_text="Front Body Height in mm")
    height_rear = models.IntegerField(help_text="Rear Body Height in mm")

    anti_roll_bar_front = models.IntegerField()
    anti_roll_bar_rear = models.IntegerField()
    compression_front = models.IntegerField()

    compression_rear = models.IntegerField()
    expansion_front = models.IntegerField()
    expansion_rear = models.IntegerField()

    natural_frequency_front = models.DecimalField(max_digits=4, decimal_places=2)
    natural_frequency_rear = models.DecimalField(max_digits=4, decimal_places=2)

    camber_front = models.DecimalField(max_digits=3, decimal_places=1, help_text="front negative camber")
    camber_rear = models.DecimalField(max_digits=3, decimal_places=1, help_text="rear negative camber")

    toe_front = models.DecimalField(max_digits=3, decimal_places=2)
    toe_rear = models.DecimalField(max_digits=3, decimal_places=2)

    # ==================== DIFFERENTIAL GEAR ====================
    DIF_NORMAL = "Normal"
    DIF_ONE_WAY = "One-Way LSD"
    DIF_TWO_WAY = "Two-Way LSD"
    DIF_FULL = "Fully Customized"
    DIF_CHOICES = (
        (DIF_NORMAL, "Normal"),
        (DIF_ONE_WAY, "One-Way LSD"),
        (DIF_TWO_WAY, "Two-Way LSD"),
        (DIF_FULL, "Fully Customized"),
    )
    differential = models.CharField(
        max_length=30, choices=DIF_CHOICES, default=DIF_NORMAL
    )
    initial_torque_front = models.IntegerField()
    initial_torque_rear = models.IntegerField()
    accel_sensitivity_front = models.IntegerField()
    accel_sensitivity_rear = models.IntegerField()
    braking_sensitivity_front = models.IntegerField()
    braking_sensitivity_rear = models.IntegerField()
    tvc_differential = models.BooleanField()
    front_rear_torque_distribution = models.CharField(
        max_length=10
    )

    class Meta:
        ordering = ('-published',)
    
    def __str__(self):
        return self.title

    def image_tag(self): # new
        return mark_safe('<img src="/../../media/%s" width="160" height="90" />' % (self.photo))

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(TuningSheet, self).save(*args, **kwargs)