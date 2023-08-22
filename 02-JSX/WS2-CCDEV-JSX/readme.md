# What you've learned

-   ...
-   ...

# Subjective

-   สร้างตัวแปรที่ชื่อว่า headerComponent เก็บค่า JSX ของส่วน Header
-   สร้างตัวแปรที่ชื่อว่า heroComponent เก็บค่า JSX ของส่วน Section
-   นำไปแสดงผลในหน้า HTML

```html
<header class="container header">
    <nav class="nav">
        <div class="logo"><h2>CodeCamp</h2></div>
        <div class="nav_menu" id="nav_menu">
            <ul class="menu_list">
                <li class="nav_menu_item"><a href="#" class="nav_menu_link">account</a></li>
                <li class="nav_menu_item"><a href="#" class="nav_menu_link">about</a></li>
                <li class="nav_menu_item"><a href="#" class="nav_menu_link">service</a></li>
                <li class="nav_menu_item"><a href="#" class="nav_menu_link">contact</a></li>
            </ul>
        </div>
    </nav>
</header>
<section class="wrapper">
    <div class="container">
        <div class="grid-cols-2">
            <div class="grid-item-1">
                <h1 class="main-heading">
                    Welcome to <span>CodeCamp</span><br />Develop anything.
                </h1>
                <p class="info-text">
                    Build a beautiful, modern website with flexible components built from scratch.
                </p>
                <div class="btn_wrapper">
                    <button class="btn view_more_btn">view all pages</button
                    ><button class="btn documentation_btn">documentation</button>
                </div>
            </div>
            <div class="grid-item-2">
                <div class="team_img_wrapper">
                    <img src="https://i.ibb.co/YkbPPn3/team.png" alt="team-photo" />
                </div>
            </div>
        </div>
    </div>
</section>
```

# Result

![preview](./image.png)
