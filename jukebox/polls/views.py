
from django.shortcuts import render
from django.shortcuts import render_to_response

from django.views.decorators.csrf import csrf_exempt
# from twilio.twiml.messaging_response import MessagingResponse
# from django_twilio.decorators import twilio_view
from django.http import HttpResponse

from twilio import twiml
from django.views.generic import View
#from django_twilio.decorators import twilio_view
from twilio.twiml.messaging_response import Body, Media, Message, MessagingResponse

from django.utils.decorators import method_decorator

def index(request):
    # name = request.body
    # print(request.body)
    # r = MessagingResponse()
    # #r.message('Hello from your Django app!')
    # r.message(name)
    # return HttpResponse(r, content_type='text/xml')
    return HttpResponse("Welcome to CrackHead 5000")
    # twiml = '<Response><Message>!JukeBox Activated!</Message></Response>'
    # return HttpResponse(twiml, content_type='text/xml')

def detail(request, question_id):
    return HttpResponse("You're looking at Question %s."% question_id)

def results(request, question_id):
    response = "You're looking at the results of Question  %s."
    return HttpResponse(response % question_id)

def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)

@csrf_exempt
#@twilio_view
def smsvote(request):

    #body = request.values.get('Body',None)
    # if body =='hello':
    #     # r.message("Hi")
    #     twiml = '<Response><Message>! Hiiiii !</Message></Response>'
    #     return HttpResponse(twiml, content_type='text/xml')
    # else:
    #     # r.message("Goodbye")
    #     twiml = '<Response><Message>!Byeee!</Message></Response>'
    #     return HttpResponse(twiml, content_type='text/xml')
    #

    #return HttpResponse(request.Body())
    # name = request.POST.get('Body','')
    # r = MessagingResponse()
    # r.message('Hello from your Django app!')
    # # r.message(name)
    # return HttpResponse(r, content_type='text/xml')
    #

    #
    #name is a string variable containing whatever the user sends as a Text Message
    name = request.POST.get('Body', '')
    
    print('You Selected ' + name)
    twiml = '<Response><Message>!JukeBox Activated!</Message></Response>'
    #return HttpResponse(twiml, content_type='text/xml')
