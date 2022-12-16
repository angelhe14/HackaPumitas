from django.db import models

# Create your models here.


class usuario ():
    def __init__(self):
        # Estos datos demostrativos, pero no reales
        self.datosP = {}

        sites = {}
        sites[f'sts1'] = {
            'titulo' : 'Habitación (B) Amplia, Casa las Maravillas',
            'estado': f'Morelos',
            'municipio': f'Cuernavaca',
            'precio': f'$890 MXN noche',
            'dueno': f'Manuel',
            'imagenes': {
                'img1': 'https://a0.muscache.com/im/pictures/253190aa-90cb-41ce-833e-5edb9b46e17e.jpg?im_w=960',
                'img2': 'https://a0.muscache.com/im/pictures/daf886a8-9336-4b13-999b-447573353a70.jpg?im_w=480',
                'img3': 'https://a0.muscache.com/im/pictures/2e9a59d0-63db-4ef4-8bf2-45fb13b885a8.jpg?im_w=480'
            },
            'valoraciones': {
                'v1': f'Martha A - diciembre de 2022: Muy amables y atentos lugar muy tranquilo para descansar ',
                'v2': f'Lorena -octubre de 2022: Excelente lugar para pasar un fin de semana relax',
                'v3' : 'Amadeo - junio de 2022: Excelente lugar para descansar! Amplia, limpia, segura, anfitrión siempre al pendiente. Todos los servicios y equipada. Muy muy recomendable!'
            }
        }

        sites[f'sts2'] = {
            'titulo' : 'CASA MEZTITLA - casa completa/casa completa',
            'estado': f'Morelos',
            'municipio': f'Tepoztlan',
            'precio': f'$9,000 MXN noche',
            'dueno': f'Luis',
            'imagenes': {
                'img1': 'https://a0.muscache.com/im/pictures/79b5e379-b9ae-4992-a3a9-17c36e049921.jpg?im_w=960',
                'img2': 'https://a0.muscache.com/im/pictures/60d7eab7-aab2-4e69-a826-cbe15ce024e8.jpg?im_w=480',
                'img3': 'https://a0.muscache.com/im/pictures/7c40bffa-007c-4e17-b374-70bed5f245dd.jpg?im_w=480'
            },
            'valoraciones': {
                'v1': f'Lilia - diciembre de 2022: Toda una obra de arte este Airbnb con la perfecta combinación de arquitectura y naturaleza. Increible vista al atardecer y la salida de la luna. Hicimos un sound-healing maravilloso. Muchos espacios para acomodarte y tener naturaleza a tu alrededor.',
                'v2': f'Lilyan - noviembre de 2022: Muy buena opción para estar en Tepoztlán',
                'v3' : 'Sabrina - septiembre de 2022: Una casa impecable en todo sentido en un lugar espectacular, las vistas impresionantes, pero sobretodo el servicio de Carlos y Ángeles es de primera. Recomendamos este lugar ampliamente.'
            }
        }


        sites[f'sts3'] = {
            'estado': f'Morelos',
            'municipio': f'Tepoztlan',
            'precio': f'$2,213 MXN noche',
            'dueno': f'Emiliano',
            'imagenes': {
                'img1': 'https://a0.muscache.com/im/pictures/miso/Hosting-7602468/original/775720cd-cee0-44a3-aec1-6e135195ef57.jpeg?im_w=960',
                'img2': 'https://a0.muscache.com/im/pictures/miso/Hosting-7602468/original/06d9c082-9475-466e-bc7f-735618c32659.jpeg?im_w=480',
                'img3': 'https://a0.muscache.com/im/pictures/380b3d77-1a9e-423b-8f64-8189f124dccf.jpg?im_w=480'
            },
            'valoraciones': {
                'v1': f'Omar Gerardo - septiembre de 2022: El lugar es muy bonito, en general cumple con las expectativas.',
                'v2': f'Jaime - septiembre de 2022: Excelente lugar! El bungalow es excelente y tiene todas la comodidades necesarias. La mamá de Emiliano nos recibió y realmente no recibió como si fuéramos algún conocido más que invita el fin de semana a su casa. Recomendable 100%.',
                'v3' : 'Ana Laura - septiembre de 2022: Wow! Es definitivo uno de los mejores lugares que me he quedado. La vista desde todos los ángulos está increíble, todo está verde y te sientes conectado con la naturaleza. Es el lugar perfecto para desconectarse y disfrutar este lugar mágico. '
            }
        }

        self.datosP['sites'] = sites

        historial = {}
        for i in range(2):
            historial[f'hst{i}'] = {
                # Estos datos demostrativos, pero no reales
                'estado': f'Morelos {i}',
                'municipio': f'Cuernavaca {i}',
                'fecha': '2022-12-12',
                'valoracion': 'Muy buen lugar para quedare ....'
            }
        self.datosP['historial'] = historial

        self.datosP['inbox'] = {
            'msg1' : 'mensaje 1',
            'msg2' : 'mensaje 2'
        }

        self.datosP['renta'] = {
            'estado': '',
            'municipio': '',
            'precio': '',
            'dueño': '',
            'fecha': '',
        }
        self.datosP['notificaciones'] = {
            'ntf1': 'notificacion 1',
            'ntf2': 'notificacion 2'
        }

    def datos_compra (self):
        data = {
            'addr_u': '5GCWxk42K6vCnp6H2QdSMCRN7cK9E525Psh4fFf3af9p36a6',
            'addr_r': '5GCWxk42K6vCnp6H2QdSMCRN7cK9E525Psh4fFf3af9p36a6',
            '': '',
            'imagenes' : {

            }
        }
        return data
