# Generated by Django 3.2.5 on 2021-07-19 05:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('userProfiles', '0008_profile_tuition_rates'),
        ('chat', '0002_auto_20210709_1513'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chat',
            name='recipientProfile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='recipientProfile', to='userProfiles.profile'),
        ),
    ]
