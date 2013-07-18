(function () {
    this.App = window.App || {};
    this.App.lang = {
        widgetName: 'Aplicación internet AlvaKids',
        getTheRightSize: 'Obtenga la talla óptima :',
        continueShopping: 'Continuar mis compras',
        helpCenter: 'Rúbrica de Ayuda',
        validation: {
            general: 'Por favor, indique la información que falta (en rosa)',
            username: {
                required: 'Nombre de usuario obligatorio',
                invalid: "3 a 20 caracteres. Letras, cifras, '-' y '_' sólo",
            },
            name: {
                required: 'Nombre de usuario obligatorio',
                invalid: "3 a 20 caracteres. Letras, cifras, '-' y '_' sólo",
            },
            password: {
                required: 'Contraseña obligatoria',
                invalid: 'Las contraseñas deben contener sólo letras y cifras',
                notMatch: "Las contraseñas no son iguales",
            },
            new_password: {
                required: 'Nueva contraseña requerida',
                invalid: 'Las contraseñas deben contener sólo letras y cifras',
                notMatch: "Las contraseñas no son iguales",
            },
            email: {
                required: 'Dirección de e-mail obligatoria',
                invalid: 'Dirección de e-mail inválida',
            },
            year: {
                required: 'Año obligatorio',
                invalid: 'Año inválido',
            },
            month: {
                required: 'Mes obligatorio',
                invalid: 'Mes inválido',
            },
            day: {
                required: 'Día obligatorio',
                invalid: 'Día inválido',
            },
            question: {
                required: 'Campo obligatorio',
            },
            sex: {
                required: 'Sexo obligatorio',
            },
            gender: {
                required: 'Sexo obligatorio',
            },
            state: {
                required: 'Estado obligatorio',
            },
            tandc: {
                required: 'Debe aceptar las condiciones de uso',
            },
            weight: {
                required: 'Peso obligatorio',
            },
            height: {
                required: 'Talla obligatoria',
            },
            child_name: {
                required: 'Nombre obligatorio',
            },
            ethnicity: {
                required: 'Origen étnico obligatorio',
            },
            date_of_birth: {
                required: 'Fecha de nacimiento obligatoria',
                invalid: 'Fecha de nacimiento inválida',
            }
        },
        navigation: {
            back: 'VUELTA',
            login: 'Conectar',
            signup: 'Inscripción',
            getSize: 'Obtener la talla',
            continueShopping: 'Continuar mis compras',
            manageAccount: 'Gestionar mi cuenta',
            profiles: 'Perfiles',
            logout: 'Deconectar',
            changePass: 'Cambiar la contraseña',
            resetMyPass: 'Renovar mi contraseña',
        },
        page: {
            about: 'Presentación',
            howItWorks: '¿Cómo funciona?',
            faq: 'FAQ',
            terms: 'Condiciones de uso',
            privacy: 'Política de privacidad',
            help: 'Ayuda',
        },
        about: {
            heading: '¿Qué es AlvaKids?',
            para1: "AlvaKids es un servicio que le ayuda a encontrar la talla óptima para sus hijos. Nuestro servicio es disponible en línea y desde la aplicación móvil para Android e iOs.",
            para2: '¿Quiere saber más? Por favor, visita la página <a href="#page/faq">"Ayuda"</a> para consultar las FAQ o nuestro sitio <a href="http://www.alvakids.com/" target="_blank">www.AlvaKids.com</a>.',
            para3: "¡Disfrute de sus compras con AlvaKids!",
            version: "AlvaKids versión v2.0",
        },
        register: {
            header: 'Registrar',
            help: "Es gratuito y sólo toma 30 segundos",
            userName: 'Nombre de usuario',
            userNameOrEmail: 'Nombre de usuario o dirección de e-mail',
            gender: 'Sexo',
            male: 'Hombre',
            female: 'Mujer',
            email: 'Dirección de e-mail',
            password: 'Contraseña',
            confirmPassword: 'Confirmar la contraseña',
            learnMore: 'Descubra más',
            tryFirst: 'Probar AlvaKids',
            registerLater: 'y registrarse después',
            error: 'Error en el registro',
            optin: 'Querría recibir la newsletter de AlvaKids.',
            tandc: 'Acepto las <a href="http://alvakids.com/terms_of_use.html" target="_blank">condiciones de uso de Alva</a>.',
            howAltImage: 'img/how-works-img.png',
            description: "AlvaKids le ayuda a encontrar la talla óptima para la ropa des sus hijos. Utilizar AlvaKids es muy facíl; registrese creando su cuenta, y después, cree un perfil para cada hijo gracias por algunas mediciones. Luego, AlvaKids genera la talla óptima para sus hijos par cualquira marca de ropa. ¡Es así de fácil! A lo largo del tiempo, AlvaKids hace evolucionar cada perfil al mismo tiempo que sus hijos, para garantizarle que obtiene precisamente la buena indicación de talla, ahora y mañana. Per no termina ahí; después se registró a AlvaKids, puede obtener las mismas indicaciones en la tienda si descarga la  aplicación móvil en el iTunes App Store o el Google Play Store. Descargue gratuitamente la aplicación y registrese con la misma cuenta que utilizó en línea para obtener todas sus informaciones en su móvil!",
        },
        settings: {
            editExplanation: 'Complete su página de informe. Todos los campos marcados con una * son obligatorios.',
            username: 'Nombre de usuario',
            firstName: 'Nombre',
            lastName: 'Apellido',
            email: 'Dirección de e-mail',
            password: 'Contraseña',
            gender: 'Sexo',
            country: 'País de residencia',
            mobilePhone: 'Número de móvil ',
            dateOfBirth: 'Fecha de nacimiento',
            state: 'Estado',
            city: 'Ciudad de residencia ',
        },
        changePassword: {
            explanation: 'Utilize su contraseña actual para crear una nueva. Si ha perdido su contraseña, por favor indique su dirección de e-mail aquí, renovaramos su contraseña y se lo enviaramos por e-mail.',
            currentPassword: 'Contraseña actual',
            newPassword: 'Nueva contraseña',
            repeatNewPassword: 'Repetir la nueva contraseña',
            save: 'Guardar',
        },
        signup: {       // Signup after try it now
            saveKidProfile: "Para guardar el perfil de su hijo, por favor indique la información que falta y registrese con su propio nombre.",
            reason: "Para que podamos guardar el perfil de su hijo, debe de crear su propia cuenta. Después, podrá tener acceso a sus indicaciones en línea y en nuestra aplicación móvil!",
        },
        login: {
            error: '¡Error!',
        },
        tryNow: {
            addProfile: "Por favor, complete las mediciones de sus hijo para obtener una indicación de talla.",
            getRecommendation: 'Obtener una indicación',
        },
        miniWidget: {
            updateAndGetSize: "Actualizar y Obtener la talla",
            helpText: "Por favor, verifique o actualice la información de su hijo.",
        },
        kidProfileAdd: {
            help: 'Crear un perfil para sus hijos para obtener la talla óptima.',
            clickToStart: 'Cliquee aquí para comenzar a añadir perfiles',
            fillIn: "Por favor, complete las mediciones de sus hijo para obtener una indicación de talla.",
            edit: "Tras editar el perfil, cliquee sobre 'Guardar el perfil' para asegurar que los cambios habían tenido en cuenta.",
            uploadPic: '¿<strong>Descargar una foto de perfil</strong> de su hijo?',
            name: 'Nombre de su hijo',
            gender: 'Sexo',
            skinny: 'Delgado',
            regular: 'Normal',
            husky: 'Gran',
            longer: 'Más largas',
            small: 'Pequeño',
            shorter: 'Más cortas',
            medium: 'Medio',
            big: 'Gran',
            male: 'Chico',
            female: 'Chica',
            leg: 'Proporción de las piernas',
            belly: 'Talla del vientre',
            proportion: 'Corpulencia',
            foot: 'Pie',
            inch: 'pulgada',
            cm: 'cm',
            kg: 'kg',
            inches: 'pulgadas',
            ft: 'pie/pulgada',
            lbs: 'lb',
            stone: 'stone',
            stonelbs: 'stone/lbs',
            chooseFt: 'Añadir un número o la talla de los pies.',
            footSize: 'Talla de los pies',
            shoeSize: 'Número',
            optional: '(opcional)',
            save: 'Guardar el perfil',
            wide: 'Número ancho',
            ethnicity: 'Origen étnico ',
            ethnicities: [
               { key: "African: Central", name: "Africano del Centro" },
               { key: "African: Eastern", name: "African del Este" },
               { key: "African: Northern", name: "Africano del Norte" },
               { key: "African: Southern", name: "Africano del Sur" },
               { key: "African: Western", name: "Africano del Oeste" },
               { key: "African-American", name: "Afro-Americano" },
               { key: "Arab/Middle eastern", name: "árabe / Oriente Próximo" },
               { key: "Asian: Chinese", name: "Asiático : Chino" },
               { key: "Asian: Indian/Pakistani", name: "Asiático : Indio/ Paquistaní" },
               { key: "Asian: Japanese", name: "Asiático : Japonés" },
               { key: "Asian: Korean", name: "Asiático : Coreano" },
               { key: "Asian: South", name: "Asiático del Sur" },
               { key: "Caribbean/Creole", name: "Carribe / Criollo" },
               { key: "Caucasian", name: "Caucásico" },
               { key: "Hispanic/Latin", name: "Hispanico / Latino" },
               { key: "Maori/Aboriginal", name: "Maori / Aborígen" },
               { key: "Mediterranean", name: "Mediterraneo" },
               { key: "Native American", name: "Indio de América" },
               { key: "Other/Mixed", name: "Otro / Metis" }
            ],
        },
        kidProfile: {
            edit: 'Editar',
            gender: 'Sexo',
            height: 'Talla',
            weight: 'Peso',
            select: 'Seleccionar',
        },
        kidsProfiles: {
            intro: "El perfil de su hijo ha evolucinado en nuestro sistema. Por favor, comprobe si las informaciones actualizadas corresponden a las mediciones de su hijo.",
            add: 'Cliquee aquí para añadir un perfil',
            kidsImgAlt: 'su perfil de niño',
            height: 'Talla',
            weight: 'Peso',
        },
        faq: {
            header: 'Preguntas que se formulan frecuentemente (FAQ)',
            searchKeyword: 'Búsqueda por palabras clave',
            faqs: [
                   {
                   question: "¿Puedo utilizar mi cuenta AlvaKids en la tienda?",
                   answer: "¡Claro! Una vezcreada su cuenta , puede utilizarla en en línea y desde la aplicación móvil. Cuando actualiza su cuenta o los perfiles de sus hijos, estas informaciones apareceren instantáneamente en línea y en la aplicación móvil.",
                   },{
                   question: "¿Cómo puedo editar los perfiles de mis hijos?",
                   answer: 'Si quiere cambiar informaciones en los perfiles, cliquee "Editar" en la página principl de los perfiles que puede ver después de connectar a su cuenta.',
                   },{
                   question: "¿Por qué AlvaKids quiere conocer el origen étnico de su hijo?",
                   answer: "Cuando sus hijos crecen, sus perfiles evolucionan con ellos. Nuestros cálculos de crecimiento incorpora el origen étnico para garantizarle que obtiene precisamente la buena indicación de talla, ahora y mañana.",
                   },{
                   question: "¿Cómo puedo cambiar mi contraseña?",
                   answer: 'Puede cambiar su contraseña en el menú arriba a la derecha que puede ver si cliquea en su nombre de usuario. Aquí encontrara la opción "Cambiar la "contraseña". Haciendo clic en este lo remitirá a la página donde puede cambiar su contraseña.',
                   },{
                   question: "Olvidé mi contraseña, ¿qué hago?",
                   answer: 'Si ha perdido su contraseña, cliquee en Conectar en la página principal. Debajo de los campos de login verá "¿Contraseña olvidada?". Haciendo clic en este requerirá que introduzca la dirección de e-mail que ha vinculado a esta cuenta. Le enviaremos una nueva contraseña por e-mail.',
                   },{
                   question: "¿Cómo puedo eliminar un perfil de un niño?",
                   answer: 'Para eliminar el perfil de un niño, simplemente cliquee en "Editar perfil" en la página principal de los perfiles y seleccione la opción "Eliminar el perfil" en el perfil que desea eliminar. El perfil de su hijo se eliminará de su cuenta.',
                   },{
                   question: "¿Cómo puedo recibir las novedades sobre AlvaKids?",
                   answer: "Para saber más sobre AlvaKids, puede visitar nuestra página Facebook, seguirnos en twitter (@AlvaKids) o consultar nuestro sitio www.AlvaKids.com. Encontrara más informaciones sobre nuestros servicios y podrá suscribirse a nuestro newsletter.",
                   },{
                   question: "¿Qué hago si no he encontrado mi pregunta?",
                   answer: "Si su pregunta no está aquí, por favor mandenos su pregunta y su dirección de e-mail en la parte derecha y responderemos lo más pronto posible.",
                   },{
                   question: "¿Qué hago si mi hijo es demasiado gran para la aplicación?",
                   answer: "AlvaKids es una aplicación para los chicos y chicas hasta 16 años de edad. Algunos niños pueden ser demasiado grandes para las tablas de talla que AlvaKids utiliza. En este caso no será capaz de generar una indicación de talla. Para estos chicos, le aconsejamos que consulte a nuestro servicio de indicación de talla para adulto, AlvaFit.",
                   },{
                   question: "¿Qué hace AlvaKids con mis informaciones?",
                   answer: "Cuidamos mucho con sus informaciones. Si quirere saber más sobre ese tema, por favor, consulte nuestra política de privacidad y nuestras condiciones de uso.",
                   }
                ]
        },
        newQuestion: {
            header: '¿No ha encontrado su pregunta?',
            help: '¡Díganoslo! Mandenos su pregunta y su dirección de e-mail en la parte debaja y responderemos lo más pronto posible.',
            submitQuestion: 'Solicite su pregunta',
            yourEmail: 'Su dirección de e-mail',
            send: 'Mandar mi pregunta',
        },
        recommendation: {
            bestSize: 'La talla óptima para su hijo es:',
            error: 'No se pueda dar una indicación',
            noSizeAvailable: 'No talla disponible',
            downloadAppReason: 'AlvaKids hará evolucionar cada perfil al mismo tiempo que sus hijos, para garantizarle que obtiene precisamente la buena indicación de talla, ahora y mañana. Para obtener indicaciones en la tienda, descargue la aplicación móvil AlvaKids en el iTunes App Store o el Google Play Store y inicie la sesión con la misma cuenta que utiliza en línea.',
            registerReason: 'Registrese a AlvaKids y guardaramos sus perfiles para ayudarle a encontrar la talla óptima para sus hijos. A lo largo del tiempo, AlvaKids hace evolucionar cada perfil al mismo tiempo que sus hijos, para garantizarle que obtiene precisamente la buena indicación de talla, ahora y mañana. ',
            saveThisProfile: 'Guarde el perfil par obtener una indicación de talla para todos los artículos de cada página.',
        },
        countries: [
                    { key: "AD", name: "Andorra" },
                    { key: "AE", name: "Emiratos Árabes Unidos" },
                    { key: "AF", name: "Afganistán" },
                    { key: "AG", name: "Antigua y Barbuda" },
                    { key: "AI", name: "Anguila" },
                    { key: "AL", name: "Albania" },
                    { key: "AM", name: "Armenia" },
                    { key: "AO", name: "Angola" },
                    { key: "AQ", name: "Antártida" },
                    { key: "AR", name: "Argentina" },
                    { key: "AS", name: "Samoa Americana" },
                    { key: "AT", name: "Austria" },
                    { key: "AU", name: "Australia" },
                    { key: "AW", name: "Aruba" },
                    { key: "AX", name: "Islas Áland" },
                    { key: "AZ", name: "Azerbaiyán" },
                    { key: "BA", name: "Bosnia y Herzegovina" },
                    { key: "BB", name: "Barbados" },
                    { key: "BD", name: "Bangladesh" },
                    { key: "BE", name: "Bélgica" },
                    { key: "BF", name: "Burkina Faso" },
                    { key: "BG", name: "Bulgaria" },
                    { key: "BH", name: "Bahréin" },
                    { key: "BI", name: "Burundi" },
                    { key: "BJ", name: "Benin" },
                    { key: "BL", name: "San Bartolomé" },
                    { key: "BM", name: "Bermudas" },
                    { key: "BN", name: "Brunéi" },
                    { key: "BO", name: "Bolivia" },
                    { key: "BQ", name: "BONAIRE, SINT EUSTATIUS Y SABA" },
                    { key: "BR", name: "Brasil" },
                    { key: "BS", name: "Bahamas" },
                    { key: "BT", name: "Bhután" },
                    { key: "BV", name: "Isla Bouvet" },
                    { key: "BW", name: "Botsuana" },
                    { key: "BY", name: "Belarús" },
                    { key: "BZ", name: "Belice" },
                    { key: "CA", name: "Canadá" },
                    { key: "CC", name: "Islas Cocos" },
                    { key: "CD", name: "CONGO, REPÚBLICA DEMOCRÁTICA DEL" },
                    { key: "CF", name: "República Centro-Africana" },
                    { key: "CG", name: "Congo" },
                    { key: "CH", name: "Suiza" },
                    { key: "CI", name: "Costa de Marfil" },
                    { key: "CK", name: "Islas Cook" },
                    { key: "CL", name: "Chile" },
                    { key: "CM", name: "Camerún" },
                    { key: "CN", name: "China" },
                    { key: "CO", name: "Colombia" },
                    { key: "CR", name: "Costa Rica" },
                    { key: "CU", name: "Cuba" },
                    { key: "CV", name: "Cabo Verde" },
                    { key: "CW", name: "CURAZAO" },
                    { key: "CX", name: "Islas Christmas" },
                    { key: "CY", name: "Chipre" },
                    { key: "CZ", name: "República Checa" },
                    { key: "DE", name: "Alemania" },
                    { key: "DJ", name: "Yibuti" },
                    { key: "DK", name: "Dinamarca" },
                    { key: "DM", name: "Domínica" },
                    { key: "DO", name: "República Dominicana" },
                    { key: "DZ", name: "Argel" },
                    { key: "EC", name: "Ecuador" },
                    { key: "EE", name: "Estonia" },
                    { key: "EG", name: "Egipto" },
                    { key: "EH", name: "Sahara Occidental" },
                    { key: "ER", name: "Eritrea" },
                    { key: "ES", name: "España" },
                    { key: "ET", name: "Etiopía" },
                    { key: "FI", name: "Finlandia" },
                    { key: "FJ", name: "Fiji" },
                    { key: "FK", name: "Islas Malvinas" },
                    { key: "FM", name: "Micronesia" },
                    { key: "FO", name: "Islas Faroe" },
                    { key: "FR", name: "Francia" },
                    { key: "GA", name: "Gabón" },
                    { key: "GB", name: "Reino Unido" },
                    { key: "GD", name: "Granada" },
                    { key: "GE", name: "Georgia" },
                    { key: "GF", name: "Guayana Francesa" },
                    { key: "GG", name: "Guernsey" },
                    { key: "GH", name: "Ghana" },
                    { key: "GI", name: "Gibraltar" },
                    { key: "GL", name: "Groenlandia" },
                    { key: "GM", name: "Gambia" },
                    { key: "GN", name: "Guinea" },
                    { key: "GP", name: "Guadalupe" },
                    { key: "GQ", name: "Guinea Ecuatorial" },
                    { key: "GR", name: "Grecia" },
                    { key: "GS", name: "Georgia del Sur e Islas Sandwich del Sur" },
                    { key: "GT", name: "Guatemala" },
                    { key: "GU", name: "Guam" },
                    { key: "GW", name: "Guinea-Bissau" },
                    { key: "GY", name: "Guayana" },
                    { key: "HK", name: "Hong Kong" },
                    { key: "HM", name: "Islas Heard y McDonald" },
                    { key: "HN", name: "Honduras" },
                    { key: "HR", name: "Croacia" },
                    { key: "HT", name: "Haití" },
                    { key: "HU", name: "Hungría" },
                    { key: "ID", name: "Indonesia" },
                    { key: "IE", name: "Irlanda" },
                    { key: "IL", name: "Israel" },
                    { key: "IM", name: "Isla de Man" },
                    { key: "IN", name: "India" },
                    { key: "IO", name: "Territorio Británico del Océano Índico" },
                    { key: "IQ", name: "Irak" },
                    { key: "IR", name: "Irán" },
                    { key: "IS", name: "Islandia" },
                    { key: "IT", name: "Italia" },
                    { key: "JE", name: "Jersey" },
                    { key: "JM", name: "Jamaica" },
                    { key: "JO", name: "Jordania" },
                    { key: "JP", name: "Japón" },
                    { key: "KE", name: "Kenia" },
                    { key: "KG", name: "Kirguistán" },
                    { key: "KH", name: "Camboya" },
                    { key: "KI", name: "Kiribati" },
                    { key: "KM", name: "Comoros" },
                    { key: "KN", name: "San Cristóbal y Nieves" },
                    { key: "KP", name: "Corea del Norte" },
                    { key: "KR", name: "Corea del Sur" },
                    { key: "KW", name: "Kuwait" },
                    { key: "KY", name: "Islas Caimán" },
                    { key: "KZ", name: "Kazajstán" },
                    { key: "LA", name: "Laos" },
                    { key: "LB", name: "Líbano" },
                    { key: "LC", name: "Santa Lucía" },
                    { key: "LI", name: "Liechtenstein" },
                    { key: "LK", name: "Sri Lanka" },
                    { key: "LR", name: "Liberia" },
                    { key: "LS", name: "Lesotho" },
                    { key: "LT", name: "Lituania" },
                    { key: "LU", name: "Luxemburgo" },
                    { key: "LV", name: "Letonia" },
                    { key: "LY", name: "Libia" },
                    { key: "MA", name: "Marruecos" },
                    { key: "MC", name: "Mónaco" },
                    { key: "MD", name: "Moldova" },
                    { key: "ME", name: "Montenegro" },
                    { key: "MF", name: "SAN MARTÍN (FRANCIA)" },
                    { key: "MG", name: "Madagascar" },
                    { key: "MH", name: "Islas Marshall" },
                    { key: "MK", name: "Macedonia" },
                    { key: "ML", name: "Mali" },
                    { key: "MM", name: "Myanmar" },
                    { key: "MN", name: "Mongolia" },
                    { key: "MO", name: "Macao" },
                    { key: "MP", name: "ISLAS MARIANAS DEL NORTE" },
                    { key: "MQ", name: "Martinica" },
                    { key: "MR", name: "Mauritania" },
                    { key: "MS", name: "Montserrat" },
                    { key: "MT", name: "Malta" },
                    { key: "MU", name: "Mauricio" },
                    { key: "MV", name: "Maldivas" },
                    { key: "MW", name: "Malawi" },
                    { key: "MX", name: "México" },
                    { key: "MY", name: "Malasia" },
                    { key: "MZ", name: "Mozambique" },
                    { key: "NA", name: "Namibia" },
                    { key: "NC", name: "Nueva Caledonia" },
                    { key: "NE", name: "Níger" },
                    { key: "NF", name: "Islas Norkfolk" },
                    { key: "NG", name: "Nigeria" },
                    { key: "NI", name: "Nicaragua" },
                    { key: "NL", name: "Países Bajos" },
                    { key: "NO", name: "Noruega" },
                    { key: "NP", name: "Nepal" },
                    { key: "NR", name: "Nauru" },
                    { key: "NU", name: "Niue" },
                    { key: "NZ", name: "Nueva Zelanda" },
                    { key: "OM", name: "Omán" },
                    { key: "PA", name: "Panamá" },
                    { key: "PE", name: "Perú" },
                    { key: "PF", name: "Polinesia Francesa" },
                    { key: "PG", name: "Papúa Nueva Guinea" },
                    { key: "PH", name: "Filipinas" },
                    { key: "PK", name: "Pakistán" },
                    { key: "PL", name: "Polonia" },
                    { key: "PM", name: "San Pedro y Miquelón" },
                    { key: "PN", name: "Islas Pitcairn" },
                    { key: "PR", name: "Puerto Rico" },
                    { key: "PS", name: "Palestina" },
                    { key: "PT", name: "Portugal" },
                    { key: "PW", name: "Islas Palaos" },
                    { key: "PY", name: "Paraguay" },
                    { key: "QA", name: "Qatar" },
                    { key: "RE", name: "Reunión" },
                    { key: "RO", name: "Rumanía" },
                    { key: "RS", name: "Serbia y Montenegro" },
                    { key: "RU", name: "Rusia" },
                    { key: "RW", name: "Ruanda" },
                    { key: "SA", name: "Arabia Saudita" },
                    { key: "SB", name: "Islas Solomón" },
                    { key: "SC", name: "Seychelles" },
                    { key: "SD", name: "Sudán" },
                    { key: "SE", name: "Suecia" },
                    { key: "SG", name: "Singapur" },
                    { key: "SH", name: "Santa Elena" },
                    { key: "SI", name: "Eslovenia" },
                    { key: "SJ", name: "Islas Svalbard y Jan Mayen" },
                    { key: "SK", name: "Eslovaquia" },
                    { key: "SL", name: "Sierra Leona" },
                    { key: "SM", name: "San Marino" },
                    { key: "SN", name: "Senegal" },
                    { key: "SO", name: "Somalia" },
                    { key: "SR", name: "Surinam" },
                    { key: "SS", name: "SUDÁN DEL SUR" },
                    { key: "ST", name: "Santo Tomé y Príncipe" },
                    { key: "SV", name: "El Salvador" },
                    { key: "SX", name: "SAN MARTÍN (PARTE NEERLANDESA)" },
                    { key: "SY", name: "Siria" },
                    { key: "SZ", name: "Suazilandia" },
                    { key: "TC", name: "Islas Turcas y Caicos" },
                    { key: "TD", name: "Chad" },
                    { key: "TF", name: "Territorios Australes Franceses" },
                    { key: "TG", name: "Togo" },
                    { key: "TH", name: "Tailandia" },
                    { key: "TJ", name: "Tayikistán" },
                    { key: "TK", name: "Tokelau" },
                    { key: "TL", name: "Timor-Leste" },
                    { key: "TM", name: "Turkmenistán" },
                    { key: "TN", name: "Túnez" },
                    { key: "TO", name: "Tonga" },
                    { key: "TR", name: "Turquía" },
                    { key: "TT", name: "Trinidad y Tobago" },
                    { key: "TV", name: "Tuvalu" },
                    { key: "TW", name: "Taiwán" },
                    { key: "TZ", name: "TANZANIA, REPÚBLICA UNIDA DE" },
                    { key: "UA", name: "Ucrania" },
                    { key: "UG", name: "Uganda" },
                    { key: "UM", name: "ISLAS ULTRAMARINAS MENORES DE ESTADOS UNIDOS" },
                    { key: "US", name: "Estados Unidos de América" },
                    { key: "UY", name: "Uruguay" },
                    { key: "UZ", name: "Uzbekistán" },
                    { key: "VA", name: "Ciudad del Vaticano" },
                    { key: "VC", name: "San Vicente y las Granadinas" },
                    { key: "VE", name: "Venezuela" },
                    { key: "VG", name: "Islas Vírgenes Británicas" },
                    { key: "VI", name: "Islas Vírgenes de los Estados Unidos de América" },
                    { key: "VN", name: "Vietnam" },
                    { key: "VU", name: "Vanuatu" },
                    { key: "WF", name: "Wallis y Futuna" },
                    { key: "WS", name: "Samoa" },
                    { key: "YE", name: "Yemen" },
                    { key: "YT", name: "Mayotte" },
                    { key: "ZA", name: "Sudáfrica" },
                    { key: "ZM", name: "ZAMBIA, REPÚBLICA DE" },
                    { key: "ZW", name: "ZIMBABUE, REPÚBLICA DE" }
        ],
        states: {
            US: [
            ]
        }
    }
}).call(this);
