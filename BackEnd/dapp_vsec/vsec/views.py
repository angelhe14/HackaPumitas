from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from rest_framework import viewsets

from usuario.models import usuario

import json

datos = usuario()
def index (request):

    data = {
        'sites' : datos.datosP['sites'],
        'historial' : datos.datosP['historial'],
        'renta' : datos.datosP['renta'],
        'inbox' : datos.datosP['inbox'],
        'notificaciones' : datos.datosP['notificaciones']
    }
    return JsonResponse(data)

def proc_renta (request):
    data = datos.datos_compra()
    return JsonResponse(data)

def login_post(request):
    try:
        print(request.body)
        data = json.loads(request.body)
        print(data)
    except Exception as ex:
        print(ex)
    return render(request, 'index.html')