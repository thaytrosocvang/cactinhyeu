document.addEventListener('DOMContentLoaded', () => {
    
    
    const albums = document.querySelectorAll('.album');
    const gallery = document.getElementById('gallery');
    const galleryContent = document.getElementById('galleryContent');
    const backBtn = document.getElementById('backBtn');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    let currentAlbum = '';
    let currentPage = 1;
    const itemsPerPage = 10;

    albums.forEach(album => {
        album.addEventListener('click', () => {
            currentAlbum = album.getAttribute('data-album');
            currentPage = 1;
            showGallery(currentAlbum, currentPage);
        });
    });

    backBtn.addEventListener('click', () => {
        gallery.style.display = 'none';
        document.querySelector('.albums').style.display = 'flex';
    });

    loadMoreBtn.addEventListener('click', () => {
        currentPage++;
        showGallery(currentAlbum, currentPage, false);
    });

    function showGallery(albumName, page, clear = true) {
        if (clear) galleryContent.innerHTML = '';
        const mediaItems = getMediaItems(albumName, page, itemsPerPage);
        mediaItems.forEach(item => {
            let element;
            if (item.type === 'img') {
                element = document.createElement('img');
                element.src = item.src;
            } else if (item.type === 'video') {
                element = document.createElement('video');
                element.src = item.src;
                element.controls = true;
            }

            element.style.maxWidth = '200px';
            element.style.margin = '10px';
            element.style.borderRadius = '10px';
            element.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            galleryContent.appendChild(element);
        });
        document.querySelector('.albums').style.display = 'none';
        gallery.style.display = 'block';

        // Initialize SortableJS on the gallery content
        new Sortable(galleryContent, {
            animation: 150,
            ghostClass: 'sortable-ghost'
        });
    }

    function getMediaItems(albumName, page, itemsPerPage) {
        const mediaItems = {
            album1: [
                { type: 'img', src: 'images/album1/img1.jpg' }, 
                { type: 'img', src: 'images/album1/img2.jpg' }, 
                { type: 'video', src: 'videos/album1/lol.mp4' },
                { type: 'video', src: 'videos/album1/video1.mp4' },
                { type: 'img', src: 'images/album1/img3.jpg' }, 
                { type: 'img', src: 'images/album1/img4.jpg' },
                { type: 'img', src: 'images/album1/img5.jpg' }, 
                { type: 'img', src: 'images/album1/img6.jpg' },
                { type: 'img', src: 'images/album1/img7.jpg' },
                { type: 'img', src: 'images/album1/img8.jpg' },
                { type: 'img', src: 'images/album1/img9.jpg' },
                { type: 'img', src: 'images/album1/img10.jpg' },
                { type: 'img', src: 'images/album1/img11.jpg' },
                { type: 'img', src: 'images/album1/img12.jpg' },
                { type: 'img', src: 'images/album1/img13.jpg' },
                { type: 'img', src: 'images/album1/img14.jpg' },
            ],
            album2: [
                { type: 'img', src: 'images/album2/img1.png' }, 
                { type: 'img', src: 'images/album2/img2.png' }, 
                { type: 'img', src: 'images/album2/img3.png' },                
                { type: 'img', src: 'images/album2/img4.png' },
                { type: 'img', src: 'images/album2/img5.png' }, 
                { type: 'img', src: 'images/album2/img6.png' },              
                { type: 'img', src: 'images/album2/img7.png' },
                { type: 'img', src: 'images/album2/img8.png' },
                { type: 'img', src: 'images/album2/img9.png' },
                { type: 'img', src: 'images/album2/img10.png' },
                { type: 'img', src: 'images/album2/img11.png' },
                { type: 'img', src: 'images/album2/img12.png' },
                { type: 'img', src: 'images/album2/img13.png' },
                { type: 'img', src: 'images/album2/img14.png' },
                { type: 'img', src: 'images/album2/img15.png' },
                { type: 'img', src: 'images/album2/img16.png' },
                { type: 'img', src: 'images/album2/img17.png' },
                { type: 'img', src: 'images/album2/img18.png' },
                { type: 'img', src: 'images/album2/img19.png' },
                { type: 'img', src: 'images/album2/img21.png' },
                { type: 'img', src: 'images/album2/img22.png' },
            ],
            album3: [
                { type: 'img', src: 'images/album3/img1.jpg' }, 
                { type: 'img', src: 'images/album3/img2.jpg' }, 
                { type: 'img', src: 'images/album3/img3.jpg' },                
                { type: 'img', src: 'images/album3/img4.jpg' },
                { type: 'img', src: 'images/album3/img5.jpg' }, 
                { type: 'img', src: 'images/album3/img6.jpg' },              
                { type: 'img', src: 'images/album3/img7.jpg' },
                { type: 'img', src: 'images/album3/img8.jpg' },
                { type: 'img', src: 'images/album3/img9.jpg' },
                { type: 'img', src: 'images/album3/img10.jpg' },
                { type: 'img', src: 'images/album3/img11.jpg' },
                { type: 'img', src: 'images/album3/img12.jpg' },
                { type: 'img', src: 'images/album3/img13.jpg' },
                { type: 'img', src: 'images/album3/img14.jpg' },
                { type: 'img', src: 'images/album3/img15.jpg' },
                { type: 'img', src: 'images/album3/img16.jpg' },
                { type: 'img', src: 'images/album3/img17.jpg' },
                { type: 'img', src: 'images/album3/img18.jpg' },
                { type: 'img', src: 'images/album3/img19.jpg' },
                { type: 'img', src: 'images/album3/img21.jpg' },
                { type: 'img', src: 'images/album3/img22.jpg' },
                { type: 'img', src: 'images/album3/img23.jpg' },
                { type: 'img', src: 'images/album3/img24.jpg' }, 
                { type: 'img', src: 'images/album3/img25.jpg' }, 
                { type: 'img', src: 'images/album3/img26.jpg' },                
                { type: 'img', src: 'images/album3/img27.jpg' },
                { type: 'img', src: 'images/album3/img28.jpg' }, 
                { type: 'img', src: 'images/album3/img29.jpg' },              
                { type: 'img', src: 'images/album3/img30.jpg' },
                { type: 'img', src: 'images/album3/img31.jpg' },
                { type: 'img', src: 'images/album3/img32.jpg' },
                { type: 'img', src: 'images/album3/img33.jpg' },
                { type: 'img', src: 'images/album3/img34.jpg' },
                { type: 'img', src: 'images/album3/img35.jpg' },
                { type: 'img', src: 'images/album3/img36.jpg' },
                { type: 'img', src: 'images/album3/img37.jpg' },
                { type: 'img', src: 'images/album3/img38.jpg' },
                { type: 'img', src: 'images/album3/img39.jpg' },
                { type: 'img', src: 'images/album3/img40.jpg' },
                { type: 'img', src: 'images/album3/img41.jpg' },
                { type: 'img', src: 'images/album3/img42.jpg' },
                { type: 'img', src: 'images/album3/img43.jpg' },
                { type: 'img', src: 'images/album3/img44.jpg' },
                { type: 'img', src: 'images/album3/img45.jpg' },
                { type: 'img', src: 'images/album3/img46.jpg' },
                { type: 'img', src: 'images/album3/img47.jpg' }, 
                { type: 'img', src: 'images/album3/img48.jpg' }, 
                { type: 'img', src: 'images/album3/img49.jpg' },                
                { type: 'img', src: 'images/album3/img50.jpg' },
                { type: 'img', src: 'images/album3/img51.jpg' }, 
                { type: 'img', src: 'images/album3/img52.jpg' },              
                { type: 'img', src: 'images/album3/img53.jpg' },
                { type: 'img', src: 'images/album3/img54.jpg' },
                { type: 'img', src: 'images/album3/img55.jpg' },
                { type: 'img', src: 'images/album3/img56.jpg' },
                { type: 'img', src: 'images/album3/img57.jpg' },
                { type: 'img', src: 'images/album3/img58.jpg' },
                { type: 'img', src: 'images/album3/img59.jpg' },
                { type: 'img', src: 'images/album3/img60.jpg' },
                { type: 'img', src: 'images/album3/img61.jpg' },
                { type: 'img', src: 'images/album3/img62.jpg' },
                { type: 'img', src: 'images/album3/img63.jpg' },
                { type: 'img', src: 'images/album3/img64.jpg' },
                { type: 'img', src: 'images/album3/img65.jpg' },
                { type: 'img', src: 'images/album3/img66.jpg' },
                { type: 'img', src: 'images/album3/img67.jpg' },
                { type: 'img', src: 'images/album3/img68.jpg' },
                { type: 'img', src: 'images/album3/img69.jpg' },
                { type: 'img', src: 'images/album3/img70.jpg' }, 
                { type: 'img', src: 'images/album3/img71.jpg' }, 
                { type: 'img', src: 'images/album3/img72.jpg' },                
                { type: 'img', src: 'images/album3/img73.jpg' },
                { type: 'img', src: 'images/album3/img74.jpg' }, 
                { type: 'img', src: 'images/album3/img75.jpg' },              
                { type: 'img', src: 'images/album3/img76.jpg' },
                { type: 'img', src: 'images/album3/img77.jpg' },
                { type: 'img', src: 'images/album3/img78.jpg' },
                { type: 'img', src: 'images/album3/img79.jpg' },
                { type: 'img', src: 'images/album3/img80.jpg' },
                { type: 'img', src: 'images/album3/img81.jpg' },
                { type: 'img', src: 'images/album3/img82.jpg' },
                { type: 'img', src: 'images/album3/img83.jpg' },
                { type: 'img', src: 'images/album3/img84.jpg' },
                { type: 'img', src: 'images/album3/img85.jpg' },
                { type: 'img', src: 'images/album3/img86.jpg' },
                { type: 'img', src: 'images/album3/img87.jpg' },
                { type: 'img', src: 'images/album3/img88.jpg' },
                { type: 'img', src: 'images/album3/img89.jpg' },
                { type: 'img', src: 'images/album3/img90.jpg' },
                { type: 'img', src: 'images/album3/img91.jpg' },
                { type: 'img', src: 'images/album3/img92.jpg' },
                { type: 'img', src: 'images/album3/img93.jpg' },
                { type: 'img', src: 'images/album3/img94.jpg' },
                { type: 'img', src: 'images/album3/img95.jpg' },
                { type: 'img', src: 'images/album3/img96.jpg' },
                { type: 'img', src: 'images/album3/img97.jpg' },
                { type: 'img', src: 'images/album3/img98.jpg' },
                { type: 'img', src: 'images/album3/img99.jpg' },
                { type: 'img', src: 'images/album3/img100.jpg' },
                { type: 'img', src: 'images/album3/img101.jpg' },
                { type: 'img', src: 'images/album3/img102.jpg' },
                { type: 'img', src: 'images/album3/img103.jpg' },
                { type: 'img', src: 'images/album3/img104.jpg' },
                { type: 'img', src: 'images/album3/img105.jpg' },
                { type: 'img', src: 'images/album3/img106.jpg' },
                { type: 'video', src: 'images/album3/video1.mp4' },
                { type: 'video', src: 'images/album3/video2.mp4' },
                { type: 'video', src: 'images/album3/video3.mp4' },
                { type: 'video', src: 'images/album3/video4.mp4' },
                { type: 'video', src: 'images/album3/video5.mp4' },
                { type: 'video', src: 'images/album3/video6.mp4' },
                { type: 'video', src: 'images/album3/video7.mp4' },
                { type: 'video', src: 'images/album3/video8.mp4' },
                { type: 'video', src: 'images/album3/video9.mp4' },
                { type: 'video', src: 'images/album3/video10.mp4' },
                { type: 'video', src: 'images/album3/video11.mp4' },
            ],
            album4: [
                { type: 'img', src: 'images/album4/img1.jpg' },
                { type: 'img', src: 'images/album4/img2.jpg' },
                { type: 'img', src: 'images/album4/img3.jpg' },
                { type: 'img', src: 'images/album4/img4.jpg' },
                { type: 'img', src: 'images/album4/img5.jpg' },
                { type: 'img', src: 'images/album4/img6.jpg' },
                { type: 'img', src: 'images/album4/img7.jpg' },
                { type: 'img', src: 'images/album4/img8.jpg' },
                { type: 'img', src: 'images/album4/img9.jpg' },
                { type: 'img', src: 'images/album4/img10.jpg' },
                { type: 'img', src: 'images/album4/img11.jpg' },
                { type: 'img', src: 'images/album4/img12.jpg' },
                { type: 'img', src: 'images/album4/img13.jpg' },
                { type: 'img', src: 'images/album4/img14.jpg' },
                { type: 'img', src: 'images/album4/img15.jpg' },
                { type: 'img', src: 'images/album4/img16.jpg' },
                { type: 'img', src: 'images/album4/img17.jpg' },
                { type: 'img', src: 'images/album4/img18.jpg' },
                { type: 'img', src: 'images/album4/img19.jpg' },
                { type: 'img', src: 'images/album4/img20.jpg' },
                { type: 'img', src: 'images/album4/img21.jpg' },
                { type: 'img', src: 'images/album4/img22.jpg' },
                { type: 'img', src: 'images/album4/img23.jpg' },
            ],
        };
        const start = (page - 1) * itemsPerPage;
        const end = page * itemsPerPage;
        return mediaItems[albumName].slice(start, end);
    }
});
