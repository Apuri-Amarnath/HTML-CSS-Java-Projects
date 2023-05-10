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

    /start --> Weclome to the notes sharing
    /help --> this particular message
    /E5 --> electronics 5th semster
    /E6 --> electronics 6th semster
    /M5 --> Mathematics 5th semster
    /M6 --> mathematics 6th semster
    
    /stop --> stop bot'''
                              )


def content(update, context):
    update.message.reply_text(
        "we have various courses notes and question papers")


def E5(update, context):
    update.message.reply_text("Here is the notes of E5")

def E6(update, context):
    update.message.reply_text("Here is the notes of E6")


def M5(update, context):
    update.message.reply_text("Here is the notes of M5")

def M6(update, context):
    update.message.reply_text("Here is the notes of M6")


dispatcher.add_handler(telegram.ext.CommandHandler('start', start))

dispatcher.add_handler(telegram.ext.CommandHandler('help', help))

dispatcher.add_handler(telegram.ext.CommandHandler('E5', E5))
dispatcher.add_handler(telegram.ext.CommandHandler('E6', E6))

dispatcher.add_handler(telegram.ext.CommandHandler('M5', M5))
dispatcher.add_handler(telegram.ext.CommandHandler('M6', M6))

updater.start_polling()
updater.idle()
