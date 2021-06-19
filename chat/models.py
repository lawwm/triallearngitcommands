from django.db import models
from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE
from django.db.models.fields.related import ForeignKey
from userProfiles.models import Profile

# Create your models here.
class Message(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user")
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

class ChatRoom(models.Model):
    messages = models.ManyToManyField(Message, blank=True)

class Chat(models.Model):
    sender = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="sender")
    recipient = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="recipient")
    chatroom = models.ForeignKey(ChatRoom, on_delete=models.CASCADE, related_name="chatroom")
    hidden = models.BooleanField(default=False)
    date_started = models.DateTimeField(auto_now_add=True)
