from flask import Flask,request
from flask import jsonify,request
from pymongo import MongoClient
from flask_cors import CORS
import json


client = MongoClient('localhost', 27017) 
db = client.statusfee    
todos = db.statusfeeDetails 

app = Flask(__name__)
title = "Flask+Mongo"
cors = CORS(app)

@app.route("/")
def redirect_url():
	return "Hello"



@app.route('/get',methods=['GET'])
def get_data():
	users = db.statusfeeDetails.find()
	data = []
	for user in users:
        # data = data + user['Admin'] + ': ' \
        # + user['ITV'] + user['Photos'] + ', '
		data.append({'Admin':user['Admin'],'ITV':user['ITV'],'Photos':user['Photos'],'State NY':user['State NY']})
		
	return jsonify(data)

@app.route('/addData', methods=['POST','GET'])
def action():
	values = request.json
	print(values)
	# todos.insert({ "field":addField, "value":value})
	return "Success"

@app.route('/addCatTier', methods=['POST','GET'])
def addCatTier():
	addCat = db.catTier
	values = request.json
	print(values)
	for i in values:
		addCat.insert({ "llimit":i['llimit'], "ulimit":i['ulimit'], "sku":i['sku']})	
	return "Success"

@app.route('/getCatTier',methods=['GET'])
def getCatTierData():
	users = db.catTier.find()
	data = []
	for user in users:
		data.append({'llimit':user['llimit'],'ulimit':user['ulimit'],'sku':user['sku']})
		
	return jsonify(data)

@app.route('/getDetails',methods=['GET'])
def getDetails():
	users = db.details.find()
	data = []
	for user in users:
		data.append({'clientName':user['clientName'],'clientFeesOwner':user['clientFeesOwner'],'email':user['email'],\
		'secondaryEmail':user['secondaryEmail'],'createdBy':user['createdBy'],\
		'modifiedBy':user['modifiedBy'],'currency':user['currency'],'emailOptOut':user['emailOptOut'],\
		'carrierID':user['carrierID'],'exchangeRate':user['exchangeRate']})
		
	return jsonify(data)

@app.route('/getTier',methods=['GET'])
def getTierData():
	users = db.tier.find()
	data = []
	for user in users:
		data.append({'llimit':user['llimit'],'ulimit':user['ulimit'],'sku':user['sku']})
		
	return jsonify(data)


@app.route('/addTier', methods=['POST','GET'])
def addTier():
	addTier = db.tier
	values = request.json
	print(values[0])
	for i in values:
		addTier.insert({ "llimit":i['llimit'], "ulimit":i['ulimit'], "sku":i['sku']})
	return "Success"

@app.route("/update", methods=['POST'])
def updateDetails ():
	users = db.details
	name=request.values.get("clientName")
	feeOwner=request.values.get("clientFeesOwner")
	email=request.values.get("email")
	semail=request.values.get("secondaryEmail")
	id=request.values.get("_id")
	# created=request.values.get("createdBy")
	# modifies=request.values.get("modifiedBy")
	# currency=request.values.get("currency")
	# emailOpt=request.values.get("emailOptOut")
	# carrier=request.values.get("carrierID")
	# exchange=request.values.get("exchangeRate")
	users.update({"_id":ObjectId(id)}, {'$set':{ "name":clientName, "fees":clientFeesOwner, "email":email, "semail":secondaryEmail}})
	return "Updated"


if __name__ == "__main__":
	app.run(debug=True)



