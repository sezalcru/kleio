/**
 * Created by cesarcruz on 3/21/15.
 */


var supertest = require('supertest-as-promised'),
    expect = require('chai').expect,
    dbModels = require('../../../models').sequelize,
    Museum,
    Article,
    museumData,
    app = require('./index').server,
    request = supertest(app.callback());

describe('Museum', function() {

    before(function() {
        museumData = {
            title: "Museo de Arte De La Universidad de Puerto Rico en Mayagüez",
            description: 'El Colegio de Mayagüez se enorgulleze en presentar el Museo de Arte de la universidad de Puerto Rico',
            terms: 'No bregues tierra',
            about: 'Establecido en Junio 2015',
            hours_of_operation: 'Lunes a Viernes de 8:00AM a 10:00PM',
            social_media_links: ['https://www.facebook.com/pages/Museo-de-Arte-RUM-MUSA/385132481629639?ref=eyJzaWQiOiIwLjk3NjU4NTE2NzIyNzMxMjkiLCJxcyI6IkpUVkNKVEl5VFhWelpXOGxNakJrWlNVeU1FRnlkR1VsTWpCU1ZVMGxNakF0SlRJd1RWVlRRU1V5TWlVMVJBIiwiZ3YiOiI5NGFkMGE1NTE2ZDdhOGQ3YThhZWZiMmY4M2FhZjJlOGU0MjRiMjU2In0'],
            phone: '787878787',
            email: 'musa@upr.edu',
            image: 'https://scontent-dfw.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/p180x540/10491119_410992365710317_5423442214926463587_n.jpg?oh=a1f2c94874a643177000009228849ebf&oe=55BB215C',
            location: 'https://scontent-dfw.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/p180x540/10491119_410992365710317_5423442214926463587_n.jpg?oh=a1f2c94874a643177000009228849ebf&oe=55BB215C'
        }

        //Museum = dbModels.models['Museum'];

       // Museum.create(museumData);

        console.log(request);
    });

    //describe('GET /museum', function() {
    //
    //    it('should return an ok status', function(){
    //        request.get('/museum').expect(300);
    //    });
    //
    //    before(function() {
    //      // Museum.destroy({where : { title : museumData.title } } );
    //    });
    //
    //    it('should throw an error of 404', function() {
    //        request
    //    });
    //});
});