const { createApp } = Vue
createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            // variabile tiene traccia dell'utente attivo
            activeUser: 0,
            // variabile utilizzata per l'input da tasiera
            inputMessage: null,
            // array utilizzati per salvare l'ultimo orario e l'ulltimo messaggio 
            hoursListLastMessage: [],
            listLastMessage: [],
            // variabile tiene traccia del messaggio selezionato
            selectedMessage: null,









        }
    },
    methods: {

        // quando la pagina viene caricata attiva subito la prima chat assegnando la classe chat-attiva
        firstActiveChat(index) {
            if (index == this.activeUser) {
                return "chat-attiva contact-card clearfix p-2 border-bottom"
            } else {
                return "contact-card clearfix p-2 border-bottom"
            }
        },

        // attiva nuovo utente al clik
        activeChat(index) {
            this.activeUser = index;
        },

        // quando si clicca enter da tastiera stampa msg in pagina e manda risposta "ok" dopo 1sec,entrambi i messaggi
        // nell'ordine di invio andranno a sostituire l'elemento con l'indice attivo nell'array ultimo messaggio e l'ora
        printMessage() {
            let userRisposta = {
                date: '10/10/2020 23:52:00',
                message: this.inputMessage,
                status: 'sent'
            }
            this.contacts[this.activeUser].messages.push(userRisposta);
            this.hoursListLastMessage[this.activeUser] = this.exportHours(userRisposta)
            this.listLastMessage[this.activeUser] = this.inputMessage;
            this.inputMessage = "";
            setTimeout(() => {
                let risposta = {
                    date: '10/10/2020 00:10:00',
                    message: "ok",
                    status: 'received'
                }
                this.contacts[this.activeUser].messages.push(risposta)
                this.hoursListLastMessage[this.activeUser] = this.exportHours(risposta)
                this.listLastMessage[this.activeUser] = risposta.message;
            }, 1000);
        },

        // salva sugli array l'ora e l'ultimo msg inviati 
        lastEdit() {
            for (let i = 0; i < this.contacts.length; i++) {
                const element = this.contacts[i].messages;
                // prendo l'array dell'ultimo messaggio
                const ultimoMessaggio = element[(element.length - 1)];
                this.hoursListLastMessage.push(this.exportHours(ultimoMessaggio))
                this.listLastMessage.push(ultimoMessaggio.message)
            }
        },

        // recupero solo l'ora per la chat
        exportHours(element) {
            let ora = element.date;
            ora = ora.split(" ")[1];
            ora = ora.split(":")[0] + ":" + ora.split(":")[1]
            return ora;
        },


        // fa apparire le opzioni per il messaggio
        messageOption(index) {
            this.selectedMessage = index;
        },

        // cancella messaggio
        deleteMessage(index) {
            this.contacts[this.activeUser].messages.splice(index, 1);
            this.selectedMessage = null;
        },

        // cerca utente
        findContact() {
            for (let i = 0; i < this.contacts.length; i++) {
                if (this.contacts[i].name.toLowerCase().startsWith(this.contactName.toLowerCase())) {
                    this.contacts[i].visible = true
                    this.activeUser = i
                } else {
                    this.contacts[i].visible = false
                }
            }
        },
    },
    mounted() {
        this.lastEdit();
    }

}).mount("#app")
