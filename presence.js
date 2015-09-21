(function () {
    var me = CryptoJS.SHA3(navigator.userAgent, { outputLength: 64 }).toString(),
        presence = window.jazzPresence = new Firebase("http://jazzcript-particles.firebaseio-demo.com/presence/" + me);
    
    var getPresence = function(){ console.log(arguments[0].val()); },
        setPresence = function(){ presence.set(me); };
    
    presence.on('value', getPresence);
    
    setPresence();
    
})();
