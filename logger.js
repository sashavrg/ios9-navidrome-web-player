(function () {
    var LOG_SERVER = 'https://192.168.1.6:5000/log';
    
    function log(message) {
        var msg = '[' + new Date().toISOString() + '] ' + message;
        console.log(msg);
        
        // Send to remote log server using XMLHttpRequest (iOS 9 compatible)
        try {
            var xhr = new XMLHttpRequest();
            var url = LOG_SERVER + '?msg=' + encodeURIComponent(msg);
            
            xhr.open('GET', url, true);
            xhr.timeout = 5000; // 5 second timeout
            
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 204) {
                        console.log('Remote log sent successfully');
                    } else {
                        console.warn('Remote log failed with status:', xhr.status);
                    }
                }
            };
            
            xhr.onerror = function() {
                console.warn('Remote log network error');
            };
            
            xhr.ontimeout = function() {
                console.warn('Remote log timeout');
            };
            
            xhr.send();
        } catch (e) {
            console.warn('Remote log exception:', e);
        }
    }
    
    // Expose globally
    window.remoteLog = log;
    
    // Log that the logger is loaded
    log('iOS 9 compatible logger loaded');
})();