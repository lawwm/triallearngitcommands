# Generated by Django 3.2.3 on 2021-06-02 08:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('userReviews', '0003_auto_20210524_1742'),
    ]

    operations = [
        migrations.RenameField(
            model_name='review',
            old_name='date_review_editted',
            new_name='date_review_edited',
        ),
    ]
