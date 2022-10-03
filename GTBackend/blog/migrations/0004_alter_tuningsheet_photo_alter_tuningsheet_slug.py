# Generated by Django 4.1.1 on 2022-10-03 21:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("blog", "0003_tuningsheet_photo"),
    ]

    operations = [
        migrations.AlterField(
            model_name="tuningsheet",
            name="photo",
            field=models.ImageField(blank=True, null=True, upload_to="car_photos"),
        ),
        migrations.AlterField(
            model_name="tuningsheet",
            name="slug",
            field=models.SlugField(
                blank=True, max_length=250, unique_for_date="published"
            ),
        ),
    ]
