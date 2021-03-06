export function loadRecipes(){
    return [
        {
            id: 1,
            name: 'Arroz com banana e bacon',
            image: 'data:image/jpeg;base64,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',
            preparation: [
                {
                    id: 1,
                    description: 'Fa??a o arroz branco de modo regular'
                },
                {
                    id: 2,
                    description: 'Frite o bacon, at?? que fique crocante. Retire do fogo e reserve'
                },
                {
                    id: 3,
                    description: 'Frite as bananas na gordura que o bacon deixou na panela, at?? ficarem bem douradas'
                },
                {
                    id: 4,
                    description: 'Misture o arroz, o bacon, a banana e o queijo parmes??o ralado'
                },
                {
                    id: 5,
                    description: 'Se quiser, acrescente 1 colher de manteiga com sal ?? mistura'
                },
                {
                    id: 6,
                    description: 'Sirva quentinho'
                }
            ],
            time: '30 minutos',
            type: 'F??cil',
            serves: '6 pessoas',
            rate: 2,
            goodWith: [
                {
                    id: 1,
                    recipe: 'Pernil assado'
                },
                {
                    id: 2,
                    recipe: 'Lombo assado'
                },
                {
                    id: 3,
                    recipe: 'Fil?? mignon grelhado'
                },
                {
                    id: 4,
                    recipe: 'Tender de natal'
                },
                {
                    id: 5,
                    recipe: 'Farofa de castanhas'
                },
                {
                    id: 6,
                    recipe: 'Molho de damasco'
                },
                {
                    id: 7,
                    recipe: 'Salada verde'
                },
            ],
            goodWere: [
                {
                    id: 1,
                    local: 'Almo??o aos domingos'
                },
                {
                    id: 2,
                    local: 'Encontros de fam??lia'
                },
                {
                    id: 3,
                    local: 'Ocasi??es especiais'
                },
                {
                    id: 4,
                    local: 'Receber os amigos'
                },
                {
                    id: 5,
                    local: 'Visitas de ??ltima hora'
                },
            ],
            drinksWith: [
                {
                    id: 1,
                    drink: 'Vinho branco seco'
                },
                {
                    id: 2,
                    drink: 'Suco de uva'
                },
                {
                    id: 3,
                    drink: 'Limonada'
                },
            ]
        },
        {
            id: 2,
            name: 'Arroz com milho e ameixa',
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQUExYVFBQWFxYYGBkZGBgZGh4ZGhgcHhkfGR8ZIRgZHyoiGhsnHB4ZJDMkKSsxMDAwGyE2OzYvOiovMC0BCwsLDw4PHBERHDEoIicvLy8tLy8vLy8vLy8vMTEvLS84LS0vMi8vLy80Ly8vLy8vLy8vLS8xLzEvLy8vMS04L//AABEIAJ8BPgMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgIDBAcBAAj/xAA9EAACAQIEBAQDBQcDBQEBAAABAhEDIQAEEjEFIkFRBhNhcTKBkRRCUqGxByMzYsHR8JLh8RUWJHKCQ1P/xAAZAQACAwEAAAAAAAAAAAAAAAACAwABBAX/xAAtEQACAgIBAgUDBAIDAAAAAAABAgARAyESMUEEEyJRgTJhsXGRofAU4UJSwf/aAAwDAQACEQMRAD8A6AcfZSuPNUATcT2GM0s+3Kv5n+2N/DqQDqAOuEDfSP6RhrUQR2OBNZowWqi2BGapzOLY1BUTJUdcVhlxlrqQcfUTiw8hSb1cYnqxnQYuFPvicpOMlSa+KjQhiTc9PTEzbFhOIZBIgYmoxWWjHmvEuSpoGN+TPLGBgONOVqQcVclS3MjAbODBrMbYDZpSdhOAMJYFqi+IBsFk4NUe5hR67/TGqnwmgnxEsfyxBjYyFwIvNVOwE41ZPhlZiDoMetsMC5qmnwU1HyxTX4mx64aMddTBL30E1lIi4AGPWzCgb4C1cycCa/FwNUzY6fcxP6YjMq9ZExs/SNR4goxW3Go2wtUc4HXUDa+KVzqMAQwIO18TmIXktGKrxs98Zn403fAN6mKmfvicpBjhpuMueuKsxxl0EsYwo08y4qtqBCmWvsVG31wHbPs0vRJI1iY+EdlkYzHOSaAmweEUCyZ0Cp4gZdzGPk8RHvvhHzmXzBlAF1WNhYix3jtjbksq6KNZAAYkiGLN6E9F3IH1nF+cYP8AjL2Mbx4jYYtp+I+4GFvLUAzajHlz3IPtBmR9MVZ13J1UkBQtckgLAEbkj1/LE8/2gjwvvqOVPjqncDF6cUpnHO+HcSV5ZWDJrCgza4kGfb9DjaeIoqszuAARHsfXB+dujA/xiRYj6KtNvvRj77NOzA4SMrxZGXUrSvfBRc6VI5gZAIIMgjBjJFHERD7ZRu04sp5A/et6dcCaPFiOuNdLi04LmIHAwmGCA6bd++BuY4hfGpa6uImMC6/CHZiSSR004K/aDXvCQGNGSs6++KgMTp2IOAjIwVDbAjNb4KOZGB9dcU0iwJmBfHmXF8X5mnilBgIU3UxiZxXTOJMcHcGpBzj6m1sV1Di7Jpc4lySgm+JqcXVcsemIU6LExGKkuTTGlF7DHy0gu9ziqtnO2CCe8Et7TSHgc0fLGepnAPhGMTuTiDAAEk2FycEABKNmW1c0xxQxOKRn6ROkVEmAYkdcTdxIEiTt64l3L4kdp8TijM1wqs34QSflfAbxHxY01BQgqCdZvyx3jYeuBlaqaiNVp8/L8IMpUlQenxbn6YTkzcdATVi8MW2TNmZzL1dYVgFleoBUdZI6f3xg4ZREOGeV8xiDvoK2F7z1wOzufbLqC2mWBDIotHaZhthbCnW8S1VdzGhW3SIDRaR0Bxk9eSdDgmIRg8SZ8UiESo5LqwLk6iG3kAd7iJj+oCjxw0airW0vtrOnm06olWBiw7idx0xnynE1apqYqVWQDMGYmYIk/TFnEuE1a5TyEd0VNbaV2d4LLq2J+CxPr3xqxrQp5hzOSeSEx44ZxcM7BmDU6TQKqnlZTsLHtuOmNvHs4FZQQvMJpsOUNG+rp2+uOe5bg+cpk0imk1AHIkEdYJNOQsm3bDllOM0MtTppXrEuq8wgAqzLBFz0H1wlko6Oj7R6PYsjY63LqGd1IdSSo6A7W29fljJToJoYUF0amD6WEKYERIMDcWtjPwvjuTo0ylN6z0Wa5fm0sY+GL9RsLW742ZSKrvpIllLBweV0WzSJs0WkfTrgCpWNV0a+n7zTlcvXQhww8ttMglgAPvEahBO2KambqmStQudZAbTFPTpkc3eLR/fGGg5NYagz8tRSJDcqjUDAMqBpF9p64HvnMxqqhCDSogPDW1IecAeoUGfaMUV5aMIMqmu8MZ5a9MF30h1TzFI5lZRcA9Q2sUxHZiehAVs74nNfSrrI/Co1CoxIIVouCYMCLxHfDkc6uZqujyKaDXUcgaFRReSTYT8zYQcZa/ihFqPTy+W00g/lGuAqOX+EmQJWJIEfUzg8fEf8Zlz5OQoHffUpzFan5K6lFGQxC/DFljkFxDSPnheoVRTYGs61UfSvLJABtpixkG2PvHVTyayLq1U2DsoP3CKrL8xCix3k4wZrP0qtCkgIVlYltgBJUge1j2wxENA+8UmZq2eg/McKCUqY+MqH/hqxChV7tI3n8vnjPlc49FyFh6Z32IX1DA7YXc3k0qsHNYwYIAMwPntg3lOEfvAjFSlokOjenICAT6z3wJr3mod7EOpxX5DpeZ+Yxvyuf+uFLPqVMa1WFJI2uP6xgbV4q5qeWGYqIuNiP74tWJEW2EX9p0YcTjrjbl+PkdZxz9qVVwppyzQbCZJBj5HbHvD85Xef3TswsYUx9Rgw0U2Gp2kLiYXFXm4kHOG3M0L5ZpT2xRWXFHD81zad/wCmNlYYl2INVBWZTGUrghmBjMRhZhiRp4njxRiWnEEhlTDGrIJvikjBLJ0dKyet8MUXAY1JhMU1q8bY9r1cZSuG1UDrKqjk4pJAMEiSJj0xXxPiVOgOa7HZRuf7DHP+KZ6u1Sq4OqQAu6ptOkA3aNpiN5wrJlC6GzH4sBfZ0J0KvmEpxrZVkwJMTgd4rqactV5oOn5/IdTE4TMlRqViHqMSwHXm0x/ntiWdDbatYuC02AnYybDtvhB8SDqppXwlEG+kXuFcXotWh11AgDUbQQbAEXk4eHrkKdNMvAmJliLCwuY6AR0wCoZSgCDTFJamyQsm/wDKDczgxkuGtTDF2IY82t+Un2BmPc2E/TMXB+npNpT/ALdYv+Ic4Sya0KAg6FG5t96Ook4D+F+HZxa7AVlorMim4Ip1BF1CoNKnTY7G/XDZ4sA8mkRSdqauG1DcTy6ua51Tt64E8F4TRdGqZiqwWQqhSATEgkKVk3H67i+HhyE7TOcas+yfiHm4DSWk2s1OpkEOACbAAjoPS+Fer4Qy9Y2zV+zDSRHSAIE7dcNKkuEoUfNooPvWDNG4ggnbv3J9MVZ/gdJ2XVUqqFAspBb3YlethbGZchU3YmgoCKa4F8OcHpUMzpq5ZSgLBajhXUwskkm9um3XDZnuMIkGkKVRGMFdMKv+npiNXLKtBwCYYEFjv1Hywm5LxWKaLQrrGgxYhjpPYjft3xZL5N/39YKhAYV4l4kpKlVkREqBTs5iRMLckbk9PnjndTMLXqE1J1NB1QWU7Cemm0+2Gjxh4Yy/knM0dYP/APO51E/ytzDqcLPBuAmurPUqGlTHUjc9okRjZi4Kt3MfiFd24gSfDqlJmNOq7QSp1h1WnIGoXAnUJawm9gLXaeCNlKJqv9oYUQOcNRLAO6ldC1FaTMglQu28dBWS8P0KOkvVLOxZAjJpV1PLKyd9u4vgvnuErXoCmNFNA5ZdIJIj2+8bzYz0xT5FLdTUyHC6Hc38M4dQy9Tz8vWpilVUAJWcoWB/CaoEg9pP9vszwWpUZhllVqdQAFi4GgqTAMn4bvBEza+Fh+CCjVD5quEomBSDhmr1FK6f3dIEFKdyAzFRZSMDOLeJKgJoUzpy6kAUzfWAIAePiAkwOkzvfFHEWIIMNszWK7ToOZ4fmDpy+XypCMwarVrEFXbuQCZVbhVi28EycbqPg0UlqonmM9SXFwE1xcibzYG5j9McvNCoCrMyRp5TJFh2IGot7X74ZPDvimjSpk3apUqSzsAIUIRqIFi5JUaiJufnTprUYOWh0mvJ+FHzNKvSzK1aVWQ9NqiwNXNIDRBG0gHr7HCnxzwuKKEjzQ6QtTWpCliwUsDFlF+/3cPCcdUUmp0WdWUEo6kTp+dp6/LGNfEZr02bMAabA6eWqJ3OoLHpJ9bWwKZGAsdI3NiY64795g8J+EKtWm2uqlPVuLahBswuInsRNxhj4pQZAHquS9DYDZrxv9Lg4xUKi5dJp1lRGMc9ElgT0aopbsRdQMDOMVK2ZYU6dem0Qed1U2HQNGu4H9sUTzNwQzIArdZZxzi2XVSjBTU7KNRDEzzObE+gmO+Bz8XrVKVRKIjSVXSAOad4HfV22wK4hwHNJ8dGoSpnWFJVhBkhgIPS0zjdT466qGd1QBF0KLsxj8A+ET1P++GlRqtwvPFkE1/Mt4JmKx81GZ6VTmMmVIvPS8G4x4nnFVIJJuCGrKFF7QpYEf2xsTP1KwDNlalMKIUhGi4gmSOYk3xbUytMn+EJi+kfqARBwJNHpHgclFGdjXHysX2svfv7YzUwXu1l6Dv74IUsHs/pOedS/L0gLDG4XGMdNsXLWwY1A6yquuMxp41VmGMjVcCTLEkEx6RiHmjFuRQO28gb/wBsQbMhmjJ5b7zbdB/XFtapOLcw/TGT1ONAFCKJuU5pyqMwGogSBe/0vgRU8QrolVOqSCGsFI/M+2FziHjWuzkUKFQr906YkAwb3BvPXCzU4y2YBq0lqBhUHmlrpe0huhHUDp74y5Mpv0zdh8MAPVDL5Hzcw9R6oOzLpY6gwJ1csREWviriIoVtLRUJ/kENUAvAEfCSdz64TvEfEKn2ktQXUrQXSnLc0XO03mcNfBOO+dThW8srAIKwBEAD/NouMJcFRy95rTZ4+0+4XwGsalV2JpApqpqrFiGi2qettvX0xChkXSh/5CQZJdyZ6yLKZnbe298Fc7lv3aszlCTz6W1WBMEMtr26RfGLJ19FVg9V6lMyKYAvM7NpHbqRB9MJZrMcq1ubsrmKNVFFFjSqpYU9JDKQbrYX997g4sQOh8ypzsgmHggyZJ91Ex7Ys4mjUMtWqBQKqqNBFyBAkgCD3J9sL3A61XMUcwhaaoQNGq8NIG20QfqO+IUN32ghxRgnx54lqVGWnrsCGWBAkG3S959NvfGPg3hriGYYMtJqakkh6vIoO8gHm9ZAMm+NfCNVHO1augEohdNS/DaSYJEMAGXfv742+JOPZxlWp5wFJ5gJC951HUWFwYmLX2vjYAQtKPmYiQWsmo38BqH4X0h0GkwdUN97mMTMTMdcYs5mHNVvKK6tUFW69LHoYwJ41mmy9LLU6S6n81UNyS0jmubyXi5wX4/Q/cVBKitT5wdtUASO8GYHyOMTKSQwmtGUE38/afcZqD7O6gHzBLKgkmw5hCyT0tjkOQ4XmatRmSk7MCC0iIJuPij/AIw9L4g1Ek3NNAKjjpeNwY3Kg9dsG8hlWbSxGik6jmYhLrMCX3szbdsNTIUvWzAyYh9V6i7wLJV1OqvXRLWWdUfOwUe09Ma+PJUdgtKgK6OkKUTWSxNwyiYiJBPQm+L+L8IyxcCu9Sswk6VJp0SY2LxrY3BKrHvvi/ITTU8qUUBgJSUoDEHVo3afxNJI63xVj6j1lM2Sxw2v37yqqlGhUpJWbzqrEAZdFFU2FyxnSuxtMm3bEqmbzLZhkoZYUQ3Nq8lU3Y3NQiZje874k2XoiiTRAV5JMgqEi8hxB0+nYx0xgyviharAPWVBBIsYaxE6pEdrwMWCX0oghF+pz1+0o8Z8GVhUY1A9VEB1oLkqtqbDvABB33wq1s1RrpSppTVK+rmd7DZpBO5vBE9Rhyy/iWhSZ6jyxHLyqwstxC22k3Pfphe4lxqlm8w1aplwyDywAsl+pUEiN+aRB2i9jh+O632/tRTIAfT0PYyvgOWXW9PMU/MSGgJfmiJWIIOI8U8GvTQuvKAqkoSC+1zpmQOt772x0PheXR6I8uk2WmNhpYjtqIn/AHxXwThKLUqF2PKxCh2HNIBBIXtP9Y2wvzmDR5xIyb6j95z3wzwvMErVWmz0ydEgi8dI32nDD4c4U32etqHxVQktIjSGv+Zw0UeFmnWZxmQyllcUgI2XSQGmbmDt0HvijP5zLqzeZKMSCRNg28xsOhxT5CT0hoPSBF+rwTMBkpUqsF10szKFVQsTEC7RFo9cYqWTzVKu9ClRFZrHWT0ixNV4EHsT7Ya8nxbL+bRUVOaWBYkWBQ9ItPc9sX0mD06qgjVTdgHHwspHwk9DMX6YoOfaQ4+97grJcOzk6arJSm4VGOoehKixsdu2L+I8MVVDVHSsy7DTpcEnUYqXk3m4+mLKnF4Bo5lNQZZVgZi3fcHqOu+APA82tRKVMmPMdlvflM9bQYH1jF6I0IPk+rkYQyeYpuHptXdiehVSpANuX0HWTviWXoxytUXYwV7TtBDQL/ljyvkhlqNfRVQQOVxOtySV5ifmYHY/JcfMGiwqytfzF2azKbGYjb1N8WFPaWeIFzt2gjpiYfBeBiDqvYY18JyeUEtmemJpXwRWgn4RiWhRsBiuBMnMCDjVJ6YqfIM/Rh84wY1Rj7z/AFwXkjuZXmHtAy+Fw13qPHYMcHMhkKdBNFNdI3Pqe5PU4kjg4srGBg1xhekpnJmSq0nAHxvxSnQylR6kkMNECJOqxsTcAST6A4OgY5f46znnZt8tWpu1NEDAh9KqCBB3gyZ3BuOsWrI1LcPAnJwJmzHGi9CKS6qhhdIAGlPUW+7f89rYHrUegWWoKSUmgrTpmJ1DoQBAJ3GC3C8iiUqgT+JDLzkTIXl5oWRt/pO/UJx7hNXMVKBUFQFAMySGDcsAdbfS+OfYOrnYGt1KeJrXcI/kNM6EAMGD2QG4gG/S2NNHLOVCulStmDE35aQBjmaY1QNiemG7LZYKFViLBQ3QQvT6yfnha8W5WtQZXoF9LMOVQXkyTeP0PrfpgQ1+mHyHX9oP4nnalar5CAjSbr0AHc9gPrbBLy6SAgMusAEM7GAwvEgcs9yI2nC3xfiuYr1aZpUydFmUDSDzSRPWcF8nmqPlPUOSMjUXYS0QbmVxGx8QDLTJyJH+h/uHuJcb1VBqVfhHLqBIMdx/eML3HPEooVC9Km3nLys7DlvfSWBBPQntOGjhXhqkQtXWxBUNpmFg8wvZrW69cEOLcLpmi+ihSqPuqkLLGIAltp2ucApHLe4DsOPFf3rUR2onMVaWYqVZNWkDyroUqwZai65JLJIH/wBEdDK94spJSZaSVGhaSLUYxpYiZVGX4luQDG8gkwTgNk8xmWjLoXOkvFMAnSSeblFxcC3f3xr4ZkPNqhKhYvDRrkDlUnTe8iIx0SAonNXk51GUcXOazLGlUgCnKg/CTqABIP4Rfva2GWnUR186rVgDQrMUgVDM6QGjlA3MRE2thEzFQ0ZoqoVgTrC7L1N94Hf0wcqE1KK0L1NBmFBBMra0SBBae5OMeRRr2mji3VTu9/iFOCZ4HzqlKkKakDVVPM5YsCAXIEcoEQJ2nBceVUJDKajCDrgsSYmzC5jbtirOLSag1BnFNG5oBAsByrceo6HthXoVMwmapZdXUpUAKtElU/EygyCO2xP5L48jrqI5F8tB+ZZxeuUJbVLAOqobhWDEAgE9QYmPujGSh4opsf8AyiSSNMJKlIsDbc/lgP4set9paieeor/EouSwBi94NrG2BD5KoxC6bnruIkiZG4BBmO2Na4VIBMz+eyjj7RpFWi6Vv/KIXSQoaGkkbRa3+XwnnMNICnaCPfuO2Om5XwzwmlltVWq1RmiGknmG4C0wOXodX12xl4X4fy7Prp00CG480sG9eVvhHUfLE5qgl8HzHZqoK4VeiXqVANIkrdiRuTbFtfiiZYIaIDCoSTBWQZ7oOaek39sHOM8QGXZKdJ6NMOrhmAEIALyo+KZgE+u+MmXzaVcutOk5Lkrq5V023tFotJJ+7hGibI0ZsB1xB2P6ZpyHGq5Ri1MjSYZWlX77EDSYIIwVy3FDTph2oS7FQDyCo7GAJJIlth8oxhbgNSs5dKhUf/q8cr2gotMmAB3Jme0Wu4dkkpsuptbohKyAAdVhAHsYHr3GAoLuQm9d4S4txGsoAp0w9SDyj4QTYBmOkAH2wn8b4c600asn7+s37ry3mahbSKcG28TuI2OHFqJSlzANVqNYX1X6b3OEfxnnGq5hQWDU8tSZwFI0nRaABeC8Lq7SRhuBSx3EZnCJqLPEs5qcUCxK03Ya5jUSQGqNM9gN7Kow48LoUcuvlrnTURxzooBWe4btYbHCMKtPRUXytbvp0PrM0rybL/ELCBcwL2nbA+TK/EVHzn9JxrZOQq6mLHlKGyL+Z0HiWdppXBeqSjIIAXUSBvs3KfexnFmUpZappqUw6KJYU2lUYgG6lu17AxMexQcplwTIawPxEfl/hw1VPGCKaIamlXy0KmCVXssSvYXEWnCWxVpZqTOD6n0O0Z1o+ZQTTpVlfnLmzSLFpkA9j0GBOcqVqDyyoARGpCDJmQDB3gHGH/uP91XM8tV+U6SFUwJXrEAz6g2mDE+GcXotyMsQLiIIYQPzkz7DAcGXZEYuZW0D8T9Ds2IY8GJY2Tkz4HEqVOTj5FvGI03IMjBLAaUZswOw64Xs14gpKYVgT+WGfiGUVys3XeOh9D3Hp6Y9fLK66WVWXsQCPpiEmWAIuZDxRTLhHYKTsemG1IdG9sc98VcESiwamFhrld2USO/3fX1w6+HXhFEyCAQfQjFBt1IVrc9pnHLP2iP+/dxEE6CCLsyoViekG4tfHTOLVfKSqwIBRHYE7WUkHHMP+o06YJYeYWJcmqQSth/Le56XucJzk6Amvwiiy57TNwfhOZZVrEgsvRmAj2G0xG5374K5YNTZnrFlA+HUIsYJf6kC1oA98c94x4zd3KqjKl4VToDdmMC/Q/IYKf8AW6+ZpIjuwGqIIB1AAcx1LE79b3MXxmOBjs6mzz1qgbjlXzyN5iI1wJWRM9dh7YpNavRSdHmq5sBcnUJ5ALyt5H02jCjlMwbNS5AWAIB+FLCQCSB7W26zh9ywap5dQVDCSAsgzb4WtuRJEdj2wllptxykBYq53jashFTLt5jSFZZmp0EFNyNjb6YL8OoPXbS1FsuAvPSkQ+oaQT2aB0je+LaFCj9sNZGmF1gfgZxpIBAvME36k4z8Izq1MzUriq66SacAfEFJEyZEAntviNXG5B11Ivna7U5TV5SFqewPwEqdvUG/pgZxTNasrUKZhS2iTDnVHYBTZunXqMNmX4wQzMqkrPw35mkf1vP9ML/EvD9IVNXklTULFmW8ljq0jUYQDvHytgVCXyjCWrgQBMHh3hy5PJGrT/eZmsvKFEsoIsFjbe53sTaMT8N5in5RGYhK1GXBeNRIFnB69Qfl3wVo8E00zqYUKcXCXYwN3dgS0XsZGMWd8KZepURndmVVACR8XWSRf6RhhyAn1H5iOIUUm5hzz5YVRVJgVaSqRA0giVlpuZUp6b7xgzkUAKlKg0H4jEn/AOeh6bxgfnfADMi+VUMrYebYAe6ibexxl4twz7CoIrLNOnBVCQCT1JO7TEfPEZQ40ZYerFQ1n8klZiSzu1Mk+WQIcR8Qi8ge8+mBNPxC1DNPTlmpBAUVxfYDTJ36j64WR4qFKolRCWYEah0I68x3J37TgsvimjWqMPKADKQrMolSw/EJKjVHWBGDGIr1GvxA85XFA7H8zBmM2lSrVqVIFVmhrN/LcW5jpOnT1gwOpOcN8GVHTVUqikpgq4nWy25dJjSCpG9xAtgFmWDovmouukGGqSzsARKssSWiYMiwGAubzmZ8xqJqVCVOlVViQD0EruIxqKsVpTUwh1VyXFxw49w6nQ+AisGXSUiCGj45naxk9yOpwscTovVaklGnU1GmCVUlp+7qkACD1n643UaYoFFZGqxLVQu7AKVMAi8b6h2xfwxwMwEpM6ayoCwtlaWEgEiYKxBgD6CAFV3s/tCsO9LoH5i0MjVSp5bU3DAwydehkwDa4vBG2GXwvm6IqpTYssgrUAM8wBIcncAXEiIgYZ/DfA1V6lStVLVXaJ6IAW0gnqSAvTpjX4p4JSCnzNAJAC1YI0EiQxKiY79Ime4AurioQDYmv+1D1AL5RTTrTRpCiIIiNE9QRbfHNuN+Ly4lVKFWBFhIgyP+PfBPhPC6bUUapWNNJaShguBHTobWYWIO+xEeIJkaNfJslFRTDmSTr1iLagZA5haTO9rYSAvKj2mzkwXkvf7RYzXi+sCx1andY12GgRBC9vlheTPMt1gG8nctNiDMyPTHTqHhiiatSpl1WdRddTEKgJjRABlLncTt6YC+JfCLLU8wUXZLl/KUuI78ogHedtp9348mO6Ey5sWU/UfiJdLMSIZgB2Aj9Bhg4N4Y+0rqRwomBq+Julh79/pjbQ4Nl67IMrTcchDFwQtSdviDEEd1HtfGXgvDMzlswjVKVRaa1VLEKxQQwM9uguemDdrHpNGKxobphY95Vx/wzWyzijOvUoflEX2KnvH9cKsf2x2zi3F6IJqs6nTZRsQSIkttHphIyGQoHNIdArU6jVCirAIbcq17qALdLnA48ujcvL4cmqi3w7LO40KuqSGKzFhafT4onF+a1a2kwxJJixX+UgACwjYRYRh3zi8PDBsvSanUBCsuptJ7qUO02+mNHGOBUMw4bUyQsalhdW1iCOn9cUc45UekMeEYLY6ztuJKMfKMeswH9Bh/SYp6W0wfXE8ymzjY7+hxBKfU7/piVOpoMNdWxAZRE9p3EfTAnj/FxQWF+MixOy+vr7YLtT0nup2OMfGeDJmE0tZhdW6g/wBQe2LYEjUpSAdzn65tnaTLSZM/e6Gew9Nhhx8N1YGn8Bse6m4wt1+GPRbS6x2I2PseuCfB6xDgfL9bf53xnU8TuOIsQ54wplsrUdN1Q6v/AF3b8pxxyvVy9QNScsG03hgWUXkgb2JYx2Y47pk6/Tpjm37QvAMF8zlgdRuyqB7SB1MW9vzY636hDwZK9B9/3nP8/wACp0KaVA8mSjN92RqVSu8DUvfrgdVrg8xFyqWsQSo5rfzED88FMznjU4d5AUK+oyBdjFQttvv+uFbgya61OkX8vU6oT7mJg7f3jC1JYG5oZVRhQ6xjpZlGqUxU0+WGDMElQYWItGxMn1w05U6NdJHOl15GBMi5KyZmQbezDCvnPBtUVHCVaZQWUu0E2kmFEC8i+C4y5FNKmVOt0iabkQRsYbY+x9x2wjJxJFGacVgGxI8M4fWy8I1RAKjQ1W8LYkNJEEydp3OMrPTyqtSp5gPeSwEajHQajYX633wxipm6wiroprIJQMzAdJNoHTbAPxL4PdmbRRVUUa/OkDUALqVmZv22XfFCmsGW1oQwhnwjxoHRTJ1agebs1zE/ljfnqj06jFnDknkmwURN/wBZ9MKq1qBqZejRX+EJcqx5iBbbrqj6nBvM8XZGKMATE9AIn829PnhGQG6HSNHufmQyfiQDzBGqpsCZClReb2G5/wB8DsvxVQ0oqEiRqUabm5utztjE/ADWqGoXWmrCQgkyQYhiPhkA3GKeHtl1oMas64YR0DAORJQFkGpQCes7jD0wq3QxeTMMYsr1mjNeIKzn91U0Dqr1FA95gMPzxVX8NpVWKmcDEtzaOZS3/sbkesYGVOIBGH7o6WCwNQMDUxsxEbFVLEGAPUjGvIcWkuyU0sLOAQwJIhiVMHlkaY6TvOH+VwFr1/SY/wDIGQ8WGv1mzgn7MUrLrbMgLJA0AFmAMTBPLfpfBbgfg6nlK1Z6j6qGkKikSzdTJgQB6b/LG3wTl6R11DUda1TTqk6NQAtpH3gMHKtZNQRHWo0RdhYepWSD+uM+TOxsR2PEgYTndM5Om9SrW1MNTFac6UUSSoI3cgR+WFWrxQGrVdF0q5up2gHl3m8fr1x1Pi3gOlVY1HMkj8WOXcd4fTy+YamjGFjUTeDvA72jfvhvh8itqzdRXiU7qBV/MhxDNV1cEo1MsNSkpoJU2kEi4IME9cF/DPD6n7rMFdFBKqipUkAkl4J2B0AwCTte/QOWT8rO5LWafmFabUySJqLoupEbAkAmO/pgvRyKPQGXgBG0yOnKwaPrN/XFZPE16a70YWLwv/O/0gvjNepTYvTSUdgNYGoNIsoj5/XfGSvnxmKFMGoyqtVYhdQdlB/d81uu3p6YctdKgqpMLS5mbbSAI+76DCDlOJVs1XdkBWkXJUHlUAgGT9THvhCrVsJs5BgFYajM3CaTshalT001MIwgG0QwG57dPmMWN4UyVaVJhTfSGYDVM7zI7fTGWhWZlYOec1BTT0AaDP0P1wopTejXqipUk0vgGoww1zEDa1j/AMYihuoPSRlFcff8Rwy3CvsVRlpy1F4UknUyWM3NwCYvieVRjUceY1MD4Sytc9wQIYbdZ3xk4LxJq4rSo0lVYLIbodydognAfOcRqUKYqUijAwGEnUnuNo6TgSrFpYA49YZ4rlmpLTfzKUU5V2UNIDT93SAo1Wv+LAnjHHs4aTQqMgPxadaleoYKSZ9NMRhryuapfZQakM1ZJcLeFZdrDYA798BeC08uSTQWq0W1trUd/iaNX54YhrtfvEP6hRNV0MX/AA/Wq5vM0l1UirtoemqBSFUSSQwmCxUTG56Ri3jTJR4g6UQq+WFKmBALBNWoiSSZaxj3wWp52vl66lcvqqVQwLUgCxAIjUdgBMTHXvhdyeVzFbOtTqip8ReorEAjVdY0zpIMWLGw26Y1oAfURQmN2ZfSGszLmsuftPnqrNSDoW0CVuJ0hiRLRHzO+GyjRWrTIs0OdjpYC8alaIMGCOkeuPc5mKYP2ZFSpUYguzguNIYagWNvhkyYFhGnfCqeJZem7lXZtWn7zwpVQpWSOa4sRIjtYYpkDixCTMyHi5vvP0azR74lTpdTv+mPqVKPfFxIG+HfczF+k+AxTmHBHpj53Jxh4nWCr6n/AD+uBZpYE18PzqsCpMjb2ONM6DBNuhwm0MwUbUN+o74JZnOMVBXp07YiZLkbHUY6+XSqul1DD/Lg9Dhe4hwCpTGuiPMi4QkK3tqNjjLlfE4Uw9sHMpxxG2IwwqrQASsiUYEGCD2OC1PaDcHEUzSnFp0nriBalE3OS/tK8FVqYXMZFNQQs1VF/iEH8PVlHNYXuN4wq8OyVCs4zCIVqKCJMmmTEAkwSpA6/WIx+hxhP8S+DQ5erltNKs13GyVT6gbN/N9cJyYtWk24PEi+OTfsfaciznGNOqk9KHuHnnDf+pB0levfGnjy/Z8nTqIoWoziQLEyCY+QGNHiDOZnLytWiyRA5iOe0nSZMyJwu8U8WVKy6QlMIbHVqdlEbxYCe9/lbGdMZPabcmcAVfyJfw3N5imVdqdVfNg000k6hNzBHMI6djfD9l8w+k061Iik0wGBIUfhJPSCQCfY9ylcD8dtQRabhqkStKBMW6yAwJBAi+Lk8dBiFqJUDGxBXcXExItv9NsU6ODpYKZVceph8xd4ii5bPutHkVCukSSACAxv2jDRliM448scyoSxNlBtAJgyPSJvfFPEvsOZXUdKOd3SA4i0Gen5YB0uBZ2kDWybM6CZZSA0dZT7wsPoLWwVq/2b7yiHx2eq/aE8/wACzKVJWqCxkhEBkgC9zb12wHyctTqgagwP7xTJLTfXbaJg+hPrivLeIHq1OZjItLe1wQI37bemNxIpjzXIWENNtueGXSAABJEG+5m+GY1YfV1isuQMNHUnkmpUqaVKjKgILI+glwQYhY+vpG/cH/1CqG1JVgqCQHVROoaSAI0tKkGDaMUV+Nl2DVQtXSOW0AQZuBYj06yZxnzrK7gGiaZhdKCRuBB5t5F8PmPvqN/hjLvWqpSqFHCEvEB0MWnsYvhg8Q8KLuHVbUxBqUzDH71wIJ/PE/CXDUyWWauwms6AC8kAmyiepJE/LFPF83mMui1HZP3nxATrUsLCB6Df0GOflsv6Z1sNhfVIfYKwRCmYrkO3MpZeUHsW26WwueOuC0aJGjzDVMMWLFlad5Y9bH8sNfBuLUXajDgGOZX/ABX6W5u2KfFPh+pmWOYC6aQpmeaQWXZgov3Bt0GKwsQ+9SZ0BWq/pih4N4y1EkMD5ZiT27YZ8v4zKtdVVGaAxMlelwOvXfCNwJ8w1eMvM7kWjSOpm0XwyDg71Aa9SAizpGxdtgT/ACz/AJAw7LjTlZisOUhK+IZ4tQVizLVqVErVRrUsoVgtJb7X5pAG0ADpgTX4pWak/wBmpinTpgy53tEhQOonBLhnDapy/OlJnBaNZJVR/wCsQLR06Y10xTo5JaLMi1K+pFgizOpJbuEWd46AdcCtXuMdjxpf9xSy3HK9PSBZAdTvp1NYxJJ7zfF7cVpF2Lp5i1JIciYJM77GD1xOrkq9GkUzC66OsAMjBtPMrc538uP032x94sH2eqFgGmwLINogwVjaNvrg6U9P4kVyL5Gv1/E28P8AGKs9Q1UALoVXSIBJBW5G8STGNuQy5NercGmUBbUbEEEX7D9MD/D+XpZoPVVFDJGoMNKyonZbXAuRiQ4ppq1qBRtSjSIEyQSRcehGAZRuu3aMXJ2JG+4nnBOIotIUgpVkJBOnmEEmYI2M9cb8vxNylYNqHwkWhrONl7kMcBshUqlvPqJDRzCOYwI26iI9o6Rhu8M8ay7B6jsikAEbWEmbkWMYFl9WpLpLMEcb4maFWgXy7iynXzKDcGCwIn1Unc4XeIeO2NSq1KmE8yBqiGAAFiJMmb3PX5YfszxyjmUMtsCUAI6bSOpOBj+GxnqVRadEVH+5URQGVump7DT3BOG48o+gjUwZcT3zBqc6p+IKi0wgADF3dqhEs+tdBBm0BSwHo59IryFDzSQiOSBMKNUD2InfrOOseHv2Hqul87X96dK3yNQ3+g+eOi8MTKZJPKy1JKa9Y3b1LGSx9Sca+0xXv3hJ8wBt9cY8xxBV+I/3wv5rjDNZLdB+X9SMZWe5JMnf9f7DCWeMCQ3W43+ER/n/ABgbVrs5kn/L4hRpFjEH277CcY+MZ5qRVETXUOyjb7oMkbQGmO2FkkwwAJuDKoliANpPe3+RgfU4hUqDXTbyKQiXZZdpCkQpFxcgj0+WMSE6pJ8+sLgAxSQjUQRcBtwDt0nFeYzqgzqFSoJAbekg+KNPUjyxHS833xYFRiIXNCX8SzFJxqdSgMaSCGLyQNQUH4biTMD1wKGpL0q4IgGDKwDBE6hH3l69ce+TUep94vI1WuYZAT1AHKbyOuNOUy2mNAEqV11mP7un/ClVH3nZZhoudj1wQcxz+HxovqO/tNuR47mUJUrqIEkC5A7kdMHsh4oLfEpXAPwTUKVlakpNI2q1n+KtNMQR2AMA+25OOhZrLqSQygj1AwwOZgZADMlHxCvfBHLcYpt1wt8S4CI1U7d1/scBK2XqJ7emC8yTgD0j7xLL5bMJ5dZadRT91wDfuJ2PqMInHP2Q0HJqZV/Lc301JdDaIn4gPecY2zDEiWb64KZbiNan8Ln2NxiuYlcGHQzlvEv2fcQyyVXagxYOHV6B1KLzKqvMsQOgjSMAs9TamgQajUIBeQQVi+mNwP0jH6Hyvitx8aA+oOLc3mMjmf49Gmx7ugJHs0SMWSDLUleon548H1FGY01KIqyrQInSN9QX5D2vhypVmo16bSy0yYdKYEEEGJUfCZIJ9Bh8f9nXDKlRatItScbaKkg+hV5t7Rtj3iP7PQyjyqiSNywaSIjdW/pjPlxMzWs3eH8RjVSrzm3FuBUa7N5IKy5fSo2MQbyAJicDh+z2rUa9anpAjUzEkHsEQMSPXHV08HVlkRTCwBNIgNbuXFz798Tr+F3WkFRXVlOoMAGYGe4JkbjCVbMO0I+QR1E5vwnwxkcrVBqOczUUSKekhdU35RJPWARg5WzuXepTerTK1FlV1Lp0gn4Ta/8Asdrz9m8lUFbzHo1lqoY1Ci4WovYmItYyDIgjtjLxRKNZitdHQqTzDlYyLczCCPcYHJzO2JEfiXEp4qAe8P0MkuhRSfSFjSCNX5m8bfTAfN8Gr13YVqbyrE06oKgD1hmmTfcRfEMtk6yIDTzA0JJZmEME9pIYj0IxDN5ut5qaamrLkAmpEmfw2EKT0Nxbrha8q9/vGNQOpiznD6mV8sfZ6WqowU1oDnUe8zp9ojEuC8UzPmPTAkEkkGwHy2E9sZfEGcqVaTJSp1KlNG1PUMEqA28KAbXvEDB3hnB6LoWoFhUCyIaQ5ABKkdyPzwbi131Mi5KsV/EELwylT11aQ0P5h1i4YLYMsHYA42cTqrWVaZbQrWJ3jrMYI0jTrUiXlWRSweZNuhB3EdMaeHjL/ZqoR1qUipOgkSCBPKdwd464GySDFsB09j+YhNwj7O5qVSzUB/DLGFqQL8oPeDB39ROPa/imm6nzackR5bADkC7QQJESfqcPdPh4qUmoGkzhqdTmKyLkaYiYYad/UYV6f7J8x5lMrrqUSw1qVNOoBvHNAPvIw/HT/V1isrlDS1UWB4tqGm1LSrawV1feIPpsSNsGWOXzGUoioCtWmRrc/EQBBWTcgyDfbD/wnwDWCqWo0k8vV5aM0gTYMSszAgR1j1OK6/7IalSq1SpndKnSWRaeq4ULYkgAQB904YEJPpFQDmVfrbl9hFjgHEaRJpIoCILgDvPXr1+eNeaySVNRUL5pRW1DeYIAPcWj88PHB/2b5HLsXarVqsRB1uAsdtKAYM0cvkMvdKdJT30gt/qN8CfDG+spvGKTYBnJuBZGtmlhadUncPoblIEDm9D69MbaX7Is1Xqa6lSnQXqI8wn1CqQBbpqx0fNeMqYsgn2wGzvimq+3KMNVFQ3dxL5smQUABLeE/s+4flIZwarjrUPLPpTFvrOC2Y8SU6Y001AA2AEAfIYSsxxB23JJxjeW3/tg+VdBF8CfqMO8R8UO0wcBqmZqOZJOKtMdQPzx9qXrJxVkwgAOkcOG8OSpTmTPUTEHePbGvIcDVhq1EkTKn6RP+2A/Cc2yklehIIPW8ET6Hrhip5rSRUX4G3HY7T7jbAADvAJPaZ+JsyUyKYCWMuQWK9iFAM3wBzQRkfymCopDVaky73lgInSCFmNzN4w91qIYSPngZ9iUNIADbSMMqCGqctqZk/w0GimpA0D4jDCC0W+61tgMW5WlKjWwVPhDWLMSqLAW2sSxHpNzjptbgGWq/wAWihb8QEHrvG+5374A8V8MeW+uiwepML5vw00JWQoUQSAvKCIGBZCNzYvi1C8VFGBaqFIDAqDJFBTNVyQ7EMRdVO46AjY7425XgxbT50LTX4KC2VQChUsQeYjSJnuca+G8KFEF3bXVPxVGuSQDsYkDGfMZ0sYFhP1vf9MIy5AggojZW/8AZbmMxA0ILARYQAAD6bRHphi4bnzUQSedeVvWCQD84/XC1RQafl+oUfqcYE4s1OrqWYBuO4lzH6R2xkx5252ek2P4VWSh1EfWfAXjGVE6l2O4xuoZkMgZdmEjFGZa2OiDc5ZFGopZhYMeuNWWWRieay5Zj3if8+WNdTKlDpPYfmL4kIzIUjHmNWZSCo9P1xmbFyCeA4vpZpx8LsPnihcepviSiJvTjVdf/wBCffGlPE1cb6T8sCnGIjF2YHEQ5T8X1B8VIH2OL18Yj71I4Xhj1kGL5H3lcRGP/uqgfipH6A4+Xj2UiPLAHbQI/TC2aIxE0BirMuhGdeN5MTCKJsYpgSPpjxOP5RfhpqPZAP6YVzlxj7yB2xORlVGb/ufLDamP9IGPD4ypDZDhbGWXtiX2Ve2JZl8RDzeNB0p4pfxbUOyxgScuOmKwuJyMnFYSqeIKzdYxQc7Wbdziry4xbQGJZl6klpMRdicBM9RIYzhnoDAfjaQ2KIhqdwSgjbfH3lz1xKcackgLXxUMmZ1ys98WfYxgsaIGKKi4uBcHfZV7Yup0R0H9MXrTnFogYuCTP//Z',
            preparation: [
                {
                    id: 1,
                    description: 'Fa??a o arroz branco de modo regular'
                },
                {
                    id: 2,
                    description: 'Frite o bacon, at?? que fique crocante. Retire do fogo e reserve'
                },
                {
                    id: 3,
                    description: 'Misture ao arroz pronto: a manteiga, o queijo ralado, as ameixas, o bacon e o milho'
                },
                {
                    id: 4,
                    description: 'Sirva quentinho'
                }
            ],
            time: '30 minutos',
            type: 'F??cil',
            serves: '6 pessoas',
            rate: 2,
            goodWith: [
                {
                    id: 1,
                    recipe: 'Pernil assado'
                },
                {
                    id: 2,
                    recipe: 'Lombo assado'
                },
                {
                    id: 3,
                    recipe: 'Fil?? mignon grelhado'
                },
                {
                    id: 4,
                    recipe: 'Tender de natal'
                },
                {
                    id: 5,
                    recipe: 'Farofa de castanhas'
                },
                {
                    id: 6,
                    recipe: 'Molho de damasco'
                },
                {
                    id: 7,
                    recipe: 'Salada verde'
                },
            ],
            goodWere: [
                {
                    id: 1,
                    local: 'Almo??o aos domingos'
                },
                {
                    id: 2,
                    local: 'Encontros de fam??lia'
                },
                {
                    id: 3,
                    local: 'Ocasi??es especiais'
                },
                {
                    id: 4,
                    local: 'Receber os amigos'
                },
                {
                    id: 5,
                    local: 'Visitas de ??ltima hora'
                },
            ],
            drinksWith: [
                {
                    id: 1,
                    drink: 'Vinho branco seco'
                },
                {
                    id: 2,
                    drink: 'Suco de uva'
                },
                {
                    id: 3,
                    drink: 'Limonada'
                },
            ]
        },
        {
            id: 3,
            name: 'Galinhada',
            image: 'data:image/jpeg;base64,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',
            preparation: [
                {
                    id: 1,
                    description: 'Cozinhe o frango da forma que preferir'
                },
                {
                    id: 2,
                    description: 'Depois que o frango estiver cozido, retire pele, osso e gordura, desfie e reserve'
                },
                {
                    id: 3,
                    description: 'Coe o caldo e reserve para usar no cozimento do arroz'
                },
                {
                    id: 4,
                    description: 'Em uma panela grande, coloque a manteiga para derreter com um fio de azeite'
                },
                {
                    id: 5,
                    description: 'Coloque o arroz cru e refogue at?? que ele pegue uma cor.'
                },
                {
                    id: 6,
                    description: 'Junte ao arroz o caldo da galinha que havia sido reservado e cozinhe normalmente'
                },
                {
                    id: 7,
                    description: 'Quando estiver perto de terminar o cozimento do arroz, junte o frango e deixe terminar em fogo baixo'
                },
                {
                    id: 8,
                    description: 'Enquanto o arroz termina, coloque um pouco de manteiga em uma frigideira e frite a castanha de caju'
                },
                {
                    id: 9,
                    description: 'Misture a castanha com o arroz e sirva'
                }
            ],
            time: '1 hora e 30 minutos',
            type: 'Trabalhosa',
            serves: '10-12 pessoas',
            rate: 3.5,
            goodWith: [
                {
                    id: 1,
                    recipe: 'Farofa com bacon e calabresa'
                },
                {
                    id: 2,
                    recipe: 'Vinagrete'
                }
            ],
            goodWere: [
                {
                    id: 1,
                    local: 'Almo??o aos domingos'
                },
                {
                    id: 2,
                    local: 'Encontros de fam??lia'
                },
                {
                    id: 3,
                    local: 'Receber os amigos'
                },
                {
                    id: 4,
                    local: 'Sentir o gosto da vida na ro??a'
                }
            ],
            drinksWith: [
                {
                    id: 1,
                    drink: 'Cerveja gelada'
                },
                {
                    id: 2,
                    drink: 'Suco de frutas variados'
                },
            ]
        },
        {
            id: 4,
            name: 'Risoto de queijo brie com parma crocante',
            image: 'data:image/jpeg;base64,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',
            preparation: [
                {
                    id: 1,
                    description: 'Coloque uma folha de papel manteiga em um tabuleiro e espalhe as fatias de parma de uma forma que n??o se sobreponham.'
                },
                {
                    id: 2,
                    description: 'Asse o parma a 180??C por 15 minutos ou at?? que fique desidratado'
                },
                {
                    id: 3,
                    description: 'Deixe esfriar em uma grelha ou lugar arejado para ficar crocante'
                },
                {
                    id: 4,
                    description: 'Em uma panela grande, aque??a o azeite e a manteiga e espere derreter'
                },
                {
                    id: 5,
                    description: 'Refoque a cebola sem dourar, acrescente o arroz e mexa at?? ele ficar transparente'
                },
                {
                    id: 6,
                    description: 'Deglacie o vinho branco e v?? incorporando o caldo de legumes aos poucos. Tempere com sal e pimenta'
                },
                {
                    id: 7,
                    description: 'Quando o arroz estiver al  dente, entre com o brie e o parmes??o'
                },
                {
                    id: 8,
                    description: 'Desligue o fogo. Acrescente o resto da manteiga e mexa vigorosamente at?? alcancar uma consistencia cremosa e brilhante'
                },
                {
                    id: 9,
                    description: 'Sirva quente com a parma crocante em lascas'
                }
            ],
            time: '1 hora',
            type: 'Trabalhosa',
            serves: '6 pessoas',
            rate: 5,
            goodWith: [
                {
                    id: 1,
                    recipe: 'Prato individual'
                }
            ],
            goodWere: [
                {
                    id: 1,
                    local: 'Almo??o aos domingos'
                },
                {
                    id: 2,
                    local: 'Encontros de fam??lia'
                },
                {
                    id: 3,
                    local: 'Jantares rom??nticos'
                },
            ],
            drinksWith: [
                {
                    id: 1,
                    drink: 'Vinho branco'
                },
                {
                    id: 2,
                    drink: 'Suco refrescante'
                },
            ]
        },
    ]
}