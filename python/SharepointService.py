import ast
import json

class Sharepoint():

  def __init__(self, content):
    self.urlContextValue = 'http://cdr/sites/project/_api/contextinfo'
    self.__content = content
    self.__URL = None
    self.__Method = None
    self.__Header = {'Accept': 'application/json;odata=verbose'}
    self.__Data = None

  def stringToDict(self, data, argument):
    if argument == 'notEncode':
      toDict = ast.literal_eval(data)
      self.__Header.update(toDict)
    elif argument == 'encoded':
      data.encoding = 'utf-8'
      toText = data.text
      toDict = ast.literal_eval(toText)
      formDigestValue = toDict['d']['GetContextWebInformation']['FormDigestValue']
      self.__Header['X-RequestDigest'] = str(formDigestValue)


  def Proccess(self, Session):
    self.__URL = self.__content['forRequest']['url']
    self.__Method = self.__content['forRequest']['method']
    if self.__content['forRequest']['header']:
      self.stringToDict(self.__content['forRequest']['header'], 'notEncode')
    if self.__content['forRequest']['dataSave']:
      self.__Data = ast.literal_eval(self.__content['forRequest']['dataSave'])

    if self.__Method == "GET":
      sendToSharepoint = Session.get(self.__URL, headers=self.__Header)
    elif self.__Method == "POST":
      getDigestValue = Session.post(self.urlContextValue, headers=self.__Header)
      self.stringToDict(getDigestValue, 'encoded')
      sendToSharepoint = Session.post(self.__URL, data=json.dumps(self.__Data), headers=self.__Header)

    return sendToSharepoint.json()
