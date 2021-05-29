# Generated by Django 3.2.3 on 2021-05-24 09:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('userProfiles', '0005_alter_profile_duration_classes'),
        ('userReviews', '0002_auto_20210518_1715'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='student_profile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='student_profile', to='userProfiles.profile'),
        ),
        migrations.AlterField(
            model_name='review',
            name='tutor_profile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tutor_profile', to='userProfiles.profile'),
        ),
    ]