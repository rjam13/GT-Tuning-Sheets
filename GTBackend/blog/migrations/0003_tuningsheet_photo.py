# Generated by Django 4.1.1 on 2022-10-03 20:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("blog", "0002_tuningsheet_toe_front_tuningsheet_toe_rear_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="tuningsheet",
            name="photo",
            field=models.ImageField(null=True, upload_to="car_photos"),
        ),
    ]