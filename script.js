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
                { type: 'img', src: 'https://media.discordapp.net/attachments/932993017961406495/1268223849468526612/img5.png?ex=66aba500&is=66aa5380&hm=e9d139d51aa6ae1141542d688d40f2bb85ad12ab47b9bf5869205a3df0d63f63&=&format=webp&quality=lossless&width=845&height=634' }, 
                { type: 'img', src: 'https://media.discordapp.net/attachments/932993017961406495/1268223850328359003/img6.png?ex=66aba500&is=66aa5380&hm=f147176020d7151c7c290f49306d4e4252b18426855aafaecfa9c2265414ca8d&=&format=webp&quality=lossless&width=475&height=634' }, 
                { type: 'img', src: 'https://media.discordapp.net/attachments/932993017961406495/1268223850743726201/img7.png?ex=66aba500&is=66aa5380&hm=140f2d7343c8258354465bceda571ba0dc59b16c3155b01480d7d81c4c5d7cbe&=&format=webp&quality=lossless' },                
                { type: 'img', src: 'https://media.discordapp.net/attachments/932993017961406495/1268223851343384616/img8.png?ex=66aba500&is=66aa5380&hm=732a03e1ae48f8c6f05bc2508139fe54c4648db6a8386b8ea376ce1ace91c4a4&=&format=webp&quality=lossless&width=475&height=634' },
                { type: 'img', src: 'https://media.discordapp.net/attachments/932993017961406495/1268223851985375376/img9.png?ex=66aba500&is=66aa5380&hm=aa45323e14e724b429fdcb19b74466f2ad05bd8e400c3472ec1538d64f2503d3&=&format=webp&quality=lossless&width=857&height=633' }, 
                { type: 'img', src: 'https://media.discordapp.net/attachments/932993017961406495/1268223852622778378/img1.png?ex=66aba500&is=66aa5380&hm=0a8a11afc6ffa931a5304485b09baac0d99755bcdcff6da02b3f5b077467f8db&=&format=webp&quality=lossless&width=634&height=634' },              
                { type: 'img', src: 'https://media.discordapp.net/attachments/932993017961406495/1268223853096603700/img2.png?ex=66aba501&is=66aa5381&hm=493dfa1060a11db5d4f51bb1cf6484a068cb0a18c55839fafcf380cce7cbca58&=&format=webp&quality=lossless&width=845&height=634' },
                { type: 'img', src: 'https://media.discordapp.net/attachments/932993017961406495/1268223854115950652/img3.jpg?ex=66aba501&is=66aa5381&hm=74f28d9f2f7a6f1f18437638f47dad256b1f8b1020290df9164316953c7e5220&=&format=webp&width=634&height=634' },
                { type: 'img', src: 'https://media.discordapp.net/attachments/932993017961406495/1268223856800305152/img4.png?ex=66aba501&is=66aa5381&hm=ff12dcaf2803d2f0c28dee3e52948e43833908c6e3ef4734a5857136ab292e62&=&format=webp&quality=lossless&width=845&height=634' },
                { type: 'img', src: 'https://media.discordapp.net/attachments/932993017961406495/1268224916684275763/img19.png?ex=66aba5fe&is=66aa547e&hm=9fd2cafd2eb009c36a34b512d849fef8618fe32f9da384ca269462f3c75335e1&=&format=webp&quality=lossless&width=634&height=634' },
                { type: 'img', src: 'https://media.discordapp.net/attachments/932993017961406495/1268224917384728576/img10.png?ex=66aba5fe&is=66aa547e&hm=d52b693623dfd4d5f8bf538192e8c427b32c564c56f148ba75e73d898e2f3cc2&=&format=webp&quality=lossless&width=845&height=634' },
                { type: 'img', src: 'https://media.discordapp.net/attachments/932993017961406495/1268224918080979054/img11.png?ex=66aba5fe&is=66aa547e&hm=faaeef2f1584678933cb763fad5bb8f5b46558b86f9081f4d4d8f3460943b683&=&format=webp&quality=lossless&width=475&height=634' },
                { type: 'img', src: 'https://media.discordapp.net/attachments/932993017961406495/1268224918760460308/img12.png?ex=66aba5ff&is=66aa547f&hm=650e389b89ab681bae744ed99451e87ccc438516488bab6143deaf634b665216&=&format=webp&quality=lossless&width=845&height=634' },
                { type: 'img', src: 'https://media.discordapp.net/attachments/932993017961406495/1268224919116709898/img13.png?ex=66aba5ff&is=66aa547f&hm=0186db24e6d949c1b0a323b5e6482e76fd0315472147e3edb6e15faacc3ce806&=&format=webp&quality=lossless' },
                { type: 'img', src: 'https://media.discordapp.net/attachments/932993017961406495/1268224919351726112/img14.png?ex=66aba5ff&is=66aa547f&hm=a7d3100af96b47bc77f9889c7f7839cb9c7ba1973bee3df0d2964622f1cc2416&=&format=webp&quality=lossless' },
                { type: 'img', src: 'https://media.discordapp.net/attachments/932993017961406495/1268224919708110970/img15.png?ex=66aba5ff&is=66aa547f&hm=1bc2882656d251053ec7c06d6afaa1f2eb317652224276e8c292b1523de75072&=&format=webp&quality=lossless&width=634&height=634' },
                { type: 'img', src: 'https://media.discordapp.net/attachments/932993017961406495/1268224920161357864/img16.png?ex=66aba5ff&is=66aa547f&hm=7873a2c4481b96ad587524f79094a922efb49b6fc1661210d52c6345e30d211e&=&format=webp&quality=lossless&width=634&height=634' },
                { type: 'img', src: 'https://media.discordapp.net/attachments/932993017961406495/1268224920526127175/img17.png?ex=66aba5ff&is=66aa547f&hm=f8f7c746539dd74de7928cd56918ab03fa03f618778a784ed0eef2557d1d50b4&=&format=webp&quality=lossless&width=634&height=634' },
                { type: 'img', src: 'https://media.discordapp.net/attachments/932993017961406495/1268224921033773076/img18.png?ex=66aba5ff&is=66aa547f&hm=8d4f66f9d026f9802a25d38b925ee9e91527d80874836aed4df92f9e57ffaa9b&=&format=webp&quality=lossless&width=634&height=634' },
                { type: 'img', src: 'https://media.discordapp.net/attachments/932993017961406495/1268225913582129233/img20.png?ex=66aba6ec&is=66aa556c&hm=b2a0a5fcd64572bc5e6ddf7c977ba40237c84a3f19de58c03c66f45dee97dffc&=&format=webp&quality=lossless&width=634&height=634' },
                { type: 'img', src: 'https://media.discordapp.net/attachments/932993017961406495/1268225914421117009/img21.png?ex=66aba6ec&is=66aa556c&hm=57dba666ea7c2b1f6c80ec4a26c8bbaf64811234ac76e2694868765488e04f00&=&format=webp&quality=lossless&width=960&height=344' },
                { type: 'img', src: 'https://media.discordapp.net/attachments/932993017961406495/1268225915305988127/img22.png?ex=66aba6ec&is=66aa556c&hm=68a83014e4b1e9a609d5f571cd51d0cbdb2eb434df51834ed7d3e59f5d82c1c1&=&format=webp&quality=lossless&width=475&height=634' },
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
