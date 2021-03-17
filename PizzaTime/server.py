from flask import Flask, render_template  # added render_template!
app = Flask(__name__)                     
    
@app.route('/index')                           
def index():
    return render_template('index.html')


@app.route('/Registration')                           
def Registration():
    return render_template('Registration.html')


@app.route('/QuickOptions')                           
def QuickOptions():
    return render_template('QuickOptions.html')  


@app.route('/PizzaPastOrder.html')                           
def PizzaPastOrder():
    return render_template('PizzaPastOrders.html') 


@app.route('/CraftPizza')                           
def CraftPizza():
    return render_template('CraftPizza.html')   


    
    
if __name__=="__main__":
    app.run(debug=True)                   
