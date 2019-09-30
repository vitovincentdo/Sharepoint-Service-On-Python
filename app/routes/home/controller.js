import Controller from '@ember/controller';

export default Controller.extend({
  newURL:'',
  newMethod:'',
  newHeader:'',
  newData:'',
  actions:{
    sendRequest(){
      const url = this.get('newURL');
      const method = this.get('newMethod');
      const header = this.get('newHeader');
      const dataSave = this.get('newData');

      const newRequestSend = this.get('store').createRecord('for-request', {
        url: url,
        method: method,
        header: header,
        dataSave:dataSave
      })
      newRequestSend.save()

      this.set('newURL', '');
      this.set('newMethod', '');
      this.set('newHeader', '');
      this.set('newData', '');
    }
  }
});
