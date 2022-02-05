from flask import Flask, render_template, redirect, request,flash
from flask_mail import Mail, Message
from config import email, mail_password

app = Flask(__name__)
app.secret_key = 'secret'

mail_setting = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": email,
    "MAIL_PASSWORD": mail_password
}

app.config.update(mail_setting)
mail = Mail(app)

class Contato:
    def __init__(self, nome,email,mensagem):
        self.nome = nome
        self.email = email
        self.mensagem = mensagem


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send', methods=["GET", "POST"])
def send():
    if request.method == "POST":
        formContato = Contato(
            request.form["nome"],
            request.form["email"],
            request.form["mensagem"]
        )

        msg = Message(
            subject=f'{formContato.nome} te enviou uma mensagem do Portifolio',
            sender=app.config.get("MAIL_USERNAME"),
            recipients=['andre.oliveira.roch@gmail.com'],
            body=f'''

            {formContato.nome} com o email {formContato.email} te enviou uma mensagem:

            {formContato.mensagem}

            '''
        )
        mail.send(msg)
        flash(' Mensagem enviado com sucesso!')
    return redirect('/')    

if __name__ == "__main__":
    app.run(debug=True)