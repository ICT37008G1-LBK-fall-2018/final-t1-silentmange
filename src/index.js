fetch('https://jsonplaceholder.typicode.com/albums')
    .then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }
            response.json().then(function (data) {
                console.log(data);	//albums
                for (var item in data) {
                    var info = getAlmubInfo(item.albumId);
                    //draw album with info
                }

            });
        }
    )
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });

function getAlbumInfo(albumId) {
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                response.json().then(function (data) {
                    return data;	//album info
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

function generate(min, max){
    for(i=0; i<max; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}

generate(0, 10);
