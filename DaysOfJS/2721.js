// 2721. Execute Asynchronous Functions in Parallel

var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let completed = 0;
        const results = [];
        
        if(functions.length === 0) {
            resolve(results);
            return;
        }

        functions.forEach((fn, index) => {
            // Führe die asynchrone Funktion aus
            fn().then((value) => {
                // Speichere das Ergebnis im Ergebnisarray
                results[index] = value;
                completed += 1;
                // Wenn alle Funktionen abgeschlossen sind, löse den Haupt-Promise auf
                if (completed === functions.length) {
                    resolve(results);
                }
            }).catch((error) => {
                // Wenn ein Fehler auftritt, lehnen Sie den Haupt-Promise ab
                reject(error);
            });
        });    
    });
};