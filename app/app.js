$(document).ready( function() {
    app.initialized()
        .then(function(_client) {
            var client = _client;
            client.events.on('app.activated',
            function() {
                client.data.get('contact')
                    .then(function(data) {
                        console.log('Client data: ', data);
                        // $('#apptext').text("Ticket created by " + data.contact.name + " " + data.contact.email);
                    })
                    .catch(function(e) {
                        console.log('Exception - ', e);
                    });

                // client.interface.trigger("showModal", {
                //         title: "Quick Manage",
                //         template: "modal.html"
                //     }).then(function(data) {
                //     // data - success message
                //     }).catch(function(error) {
                //     // error - error object
                //     });
            });

            // var openModal = function() {
            //     client.interface.trigger("showModal", {
            //         title: "Quick Manage",
            //         template: "modal.html"
            //     }).then(function(data) {
            //     // data - success message
            //     }).catch(function(error) {
            //     // error - error object
            //     });
            // } 
            // $('#modalButton').click(openModal);
            
        });
    // app.activated()
    //     .then(function(_client) {
    //         var client = _client;
    //         client.interface.trigger("showModal", {
    //             title: "Quick Manage",
    //             template: "modal.html"
    //         }).then(function(data) {
    //         // data - success message
    //         }).catch(function(error) {
    //         // error - error object
    //         });
    //     })
});
