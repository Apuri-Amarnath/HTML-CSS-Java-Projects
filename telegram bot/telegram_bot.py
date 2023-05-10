import telegram.ext
import os
Token = "5762000645:AAGcXqZTVPl2hxvJJ2WpbiEfneDlRsllZhQ"

updater = telegram.ext.Updater(
    "5762000645:AAGcXqZTVPl2hxvJJ2WpbiEfneDlRsllZhQ", use_context=True)

dispatcher = updater.dispatcher


def start(update, context):
    update.message.reply_text("Hello!, welcome to file transfering bot")


def help(update, context):
    update.message.reply_text('''
    The following commands are avialable:

    /start --> Weclome to the file shareing
    /help --> this particular message
    /E5 --> electronics 5th semster
    /stop --> stop bot'''
                              )


def content(update, context):
    update.message.reply_text(
        "we have various courses notes and question papers")


def electronics5(update, context):
    update.message.reply_text("Here is the notes of E5")


dispatcher.add_handler(telegram.ext.CommandHandler('start', start))

dispatcher.add_handler(telegram.ext.CommandHandler('help', help))

dispatcher.add_handler(telegram.ext.CommandHandler('E5', electronics5))

updater.start_polling()
updater.idle()
