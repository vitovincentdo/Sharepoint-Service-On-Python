import Controller from '@ember/controller';

export default Controller.extend({
  newUsername: '',
  newPassword: '',
  actions:{
    sendLogin(){
      const username = this.get('newUsername');
      const password = this.get('newPassword');

      const newRequestSend = this.get('store').createRecord('login', {
        username: username,
        password: password
      })
      newRequestSend.save()
      this.transitionToRoute('routes.home')

      this.set('newUsername', '');
      this.set('newPassword', '');
    }
  }
});
