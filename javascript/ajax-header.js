document.addEventListener('DOMContentLoaded', () => {
    // Function to load header content via AJAX
    function loadHeader() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "../header-footer/header.html", true); // Adjust the path to your header.html
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById("header").innerHTML = xhr.responseText;
                // After the content is loaded, initialize your navigation functionalities
                initNavJS();
            }
        };
        xhr.send();
    }



   
    // Function to initialize navigation functionalities
    function initNavJS() {
        // Check if elements exist before accessing them
        const checkbox = document.getElementById('menubar');
        const body = document.body;
        const menuPages = document.querySelector('.menu-list-container');
        const menuBtn = document.getElementById('label_menu');
        const menuIcon = document.querySelector('.menu label');
        const menuCheckbox = document.getElementById('menubar');
        const menuList = document.getElementById('menu_list_checkbox');
        const rotationbox=document.getElementById("rotation_3d_checkbox");
  
        if (menuBtn) {
            menuBtn.addEventListener('click', () => {
                if (checkbox) {
                    checkbox.checked == true ? body.classList.remove('scroll_hidden') : body.classList.add('scroll_hidden');
                    checkbox.checked == true ? menuPages.style.display = 'none' : menuPages.style.display = 'flex';
                    checkbox.checked == true ? rotationbox.checked=false:rotationbox.checked=true;
                    
                }
            });
        } else {
            console.error('Element with ID "label_menu" not found.');
        }
  
        // Mouse animation
        const pos = document.documentElement;
        if (pos) {
            pos.addEventListener('mousemove', (e) => {
                pos.style.setProperty('--x', e.clientX + 'px');
                pos.style.setProperty('--y', e.clientY + 'px');
            });
        } else {
            console.error('Document element not found.');
        }
  
        // Menu list toggle
        if (menuIcon && menuCheckbox && menuList) {
            menuIcon.addEventListener('click', () => {
                menuCheckbox.checked == true ? menuList.checked = false : menuList.checked = true;
            });
        } else {
            console.error('Menu elements not found: ', { menuIcon, menuCheckbox, menuList });
        }
    }
  
    // Load header and initialize navigation functionalities
    loadHeader();
  });
  