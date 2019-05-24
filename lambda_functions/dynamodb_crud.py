import boto3
import json

print('Loading function')
dynamo = boto3.client('dynamodb')


def respond(err, res=None):
    return {
        'statusCode': '400' if err else '200',
        'body': err.message if err else json.dumps(res),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Methods":"DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT"
        },
    }


def lambda_handler(event, context):

    tablename = 'HUsignup'
    
    operations = {
        'DELETE': lambda dynamo, x: dynamo.delete_item(**x),
        'GET': lambda dynamo, x: dynamo.scan(**x),
        'POST': lambda dynamo, x: dynamo.put_item(**x),
        'PUT': lambda dynamo, x: dynamo.update_item(**x),
    }
 
    operation = event['httpMethod']
    if operation in operations:
        if operation == 'GET': 
            payload = event['queryStringParameters'] 
        elif operation == 'POST':
            item = json.loads(event['body']) 
            payload = {
                'TableName': tablename,
                'Item': item
            }
        else: 
            payload = json.loads(event['body']) 
        return respond(None, operations[operation](dynamo, payload))
    else:
        return respond(ValueError('Unsupported method "{}"'.format(operation)))
