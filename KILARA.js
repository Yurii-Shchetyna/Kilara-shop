
//burger menu
document.addEventListener('DOMContentLoaded', () => {

    const open_menu = document.getElementById('open-menu');
    const menu_container = document.getElementById('menu-container');
    const close_menu = document.getElementById('close-menu');

    const open_wmn = document.getElementById('open-wmn');
    const wmn_container = document.getElementById('wmn-container');
    const close_wmn = document.getElementById('close-wmn');

    const open_men = document.getElementById('open-men');
    const men_container = document.getElementById('men-container');
    const close_men = document.getElementById('close-men');

    const open_kid = document.getElementById('open-kid');
    const kid_container = document.getElementById('kid-container');
    const close_kid = document.getElementById('close-kid');

    const open_acs = document.getElementById('open-acs');
    const acs_container = document.getElementById('acs-container');
    const close_acs = document.getElementById('close-acs');

    function lockBody() {
        if (window.innerWidth < 768) {
            document.body.classList.add('no-scroll');
        }
    }

    function unlockBody() {
        if (window.innerWidth < 768) {
            document.body.classList.remove('no-scroll');
        }
    }

    open_menu.addEventListener("click", () => {
        menu_container.classList.add('show');
        lockBody();
    });

    close_menu.addEventListener("click", () => {
        menu_container.classList.remove('show');
        wmn_container.classList.remove('show');
        men_container.classList.remove('show');
        kid_container.classList.remove('show');
        acs_container.classList.remove('show');
        unlockBody();
    });

    close_menu.addEventListener("click", () => {
        wmn_container.classList.remove('show');
    });

    open_wmn.addEventListener("click", () => {
        wmn_container.classList.add('show');
    });

    close_wmn.addEventListener("click", () => {
        wmn_container.classList.remove('show');
    });

    open_men.addEventListener("click", () => {
        men_container.classList.add('show');
    });

    close_men.addEventListener("click", () => {
        men_container.classList.remove('show');
    });

    open_kid.addEventListener("click", () => {
        kid_container.classList.add('show');
    });

    close_kid.addEventListener("click", () => {
        kid_container.classList.remove('show');
    });


    open_acs.addEventListener("click", () => {
        acs_container.classList.add('show');
    });

    close_acs.addEventListener("click", () => {
        acs_container.classList.remove('show');
    });
});

//cart
document.addEventListener('DOMContentLoaded', () => {
    const open_cart = document.getElementById('open-cart');
    const cart_container = document.getElementById('cart-container');
    const cart_content = document.getElementById('cart-content');
    const close_cart = document.getElementById('close-cart');

    function showCart({ fromPop = false} = {}) {
        cart_container.classList.add('show');
        cart_content.classList.add('show');
        lockBody();

        if(!fromPop) {
            if(!history.state || history.state.popup !== 'cart') {
                history.pushState({popup: 'cart'}, '', '#cart');
            }
        }
    }

    function hideCart({ fromPop = false} = {}) {
        cart_container.classList.remove('show');
        cart_content.classList.remove('show');
        unlockBody();

        if(!fromPop) {
            if(history.state && history.state.popup === 'cart') {
                history.back();
                return;
            }
        }
    }

    function lockBody() {
        if (window.innerWidth < 768) {
            document.body.classList.add('no-scroll');
        }
    }

    function unlockBody() {
        if (window.innerWidth < 768) {
            document.body.classList.remove('no-scroll');
        }
    }

    open_cart.addEventListener("click", () => {
        showCart();
    });

    close_cart.addEventListener("click", () => {
        hideCart();
    });

    cart_container.addEventListener("click", (e) => {
        if (e.target === cart_container) {
            hideCart();
    }
    });

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape'){
            if(cart_container.classList.contains('show')){
                hideCart()}
        }
    });
});

// item pops up
document.addEventListener('DOMContentLoaded', () => {

    const open_size = document.getElementById('open-size');
    const size_container = document.getElementById('size-container');
    const size_content = document.getElementById('size-content')
    const close_size = document.getElementById('close-size');

    open_size?.addEventListener("click", () => {
        size_container.classList.add('show');
        size_content.classList.add('show');
    });

    close_size?.addEventListener("click", () => {
        size_container.classList.remove('show');
        size_content.classList.remove('show');
    });

    size_container?.addEventListener("click", (e) => {
        if(e.target === size_container) {
            size_container.classList.remove('show');
            size_content.classList.remove('show');
        }
    });

    document.addEventListener("keydown", (e) => {
        if(e.key === "Escape") {
            size_container.classList.remove('show');
            size_content.classList.remove('show');
        }
    });



    const open_chr = document.getElementById('open-chr');
    const chr_container = document.getElementById('chr-container');
    const chr = document.getElementById('chr');
    const close_chr = document.getElementById('close-chr');

    open_chr?.addEventListener("click", () => {
        chr_container.classList.add('show');
        chr.classList.add('show');
    });

    close_chr?.addEventListener("click", () => {
        chr_container.classList.remove('show');
        chr.classList.remove('show');
    });

    chr_container?.addEventListener("click", (e) => {
        if(e.target === chr_container) {
            chr_container.classList.remove('show');
            chr.classList.remove('show');
        }
    });

    document.addEventListener("keydown", (e) => {
        if(e.key === "Escape") {
            chr_container.classList.remove('show');
            chr.classList.remove('show');
        }
    });


    const open_del = document.getElementById('open-del');
    const del_container = document.getElementById('del-container');
    const del_content = document.getElementById('del-content');
    const close_del = document.getElementById('close-del');

    open_del?.addEventListener("click", () => {
        del_container.classList.add('show');
        del_content.classList.add('show');
    });

    close_del?.addEventListener("click", () => {
        del_container.classList.remove('show');
        del_content.classList.remove('show');
    });

    del_container?.addEventListener("click", (e) => {
        if(e.target === del_container) {
            del_container.classList.remove('show');
            del_content.classList.remove('show');
        }
    });

    document.addEventListener("keydown", (e) => {
        if(e.key === "Escape") {
            del_container.classList.remove('show');
            del_content.classList.remove('show');
        }
    });

    const open_pay = document.getElementById('open-pay');
    const pay_container = document.getElementById('pay-container');
    const pay_content = document.getElementById('pay-content');
    const close_pay = document.getElementById('close-pay');

    open_pay?.addEventListener("click", () => {
        pay_container.classList.add('show');
        pay_content.classList.add('show');
    });

    close_pay?.addEventListener("click", () => {
        pay_container.classList.remove('show');
        pay_content.classList.remove('show');
    });

    pay_container?.addEventListener("click", (e) => {
        if(e.target === pay_container) {
            pay_container.classList.remove('show');
            pay_content.classList.remove('show');
        }
    });

    document.addEventListener("keydown", (e) => {
        if(e.key === "Escape") {
            pay_container.classList.remove('show');
            pay_content.classList.remove('show');
        }
    });
});

//sort and filters
document.addEventListener('DOMContentLoaded', () => {

    const sizes_btn = document.getElementById('sizes-btn');
    const sizes_submenu = document.getElementById('sizes-submenu');

    const color_btn = document.getElementById('color-btn');
    const color_submenu = document.getElementById('color-submenu');

    const price_btn = document.getElementById('price-btn');
    const price_submenu = document.getElementById('price-submenu');

    const age_btn = document.getElementById('age-btn');
    const age_submenu = document.getElementById('age-submenu');

    const sex_btn = document.getElementById('sex-btn');
    const sex_submenu = document.getElementById('sex-submenu');

    const sort_btn = document.getElementById('sort-btn');
    const sort_submenu = document.getElementById('sort-submenu');
    const sort_label = document.getElementById('sort-label');

    const filter_btn = document.getElementById('open-filter');
    const filter_submenu = document.getElementById('filter-submenu');

    const sort_sp_btn = document.getElementById('sort-sp-btn');
    const sort_submenu_sp = document.getElementById('sort-submenu-sp');

    const submenus = [sizes_submenu, color_submenu, price_submenu, sort_submenu, filter_submenu, sort_submenu_sp, age_submenu, sex_submenu].filter(Boolean);
    const buttons  = [sizes_btn, color_btn, price_btn, sort_btn, filter_btn, sort_sp_btn, age_btn, sex_btn].filter(Boolean);

    function toggleExclusive(menu, btn) {

        const wasOpen = menu.classList.contains('show');

        submenus.forEach(m => m.classList.remove('show'));

        buttons.forEach(b => b?.classList.remove('active'));

        if (!wasOpen) {
        menu.classList.add('show'); 
        btn.classList.add('active');
        }
    }

    age_btn?.addEventListener('click', (e) => {
        e.preventDefault();
        toggleExclusive(age_submenu, age_btn);
    });

    sex_btn?.addEventListener('click', (e) => {
        e.preventDefault();
        toggleExclusive(sex_submenu, sex_btn);
    });

    sizes_btn?.addEventListener('click', (e) => {
        e.preventDefault();
        toggleExclusive(sizes_submenu, sizes_btn);
    });

    color_btn?.addEventListener('click', (e) => {
        e.preventDefault();
        toggleExclusive(color_submenu, color_btn);
    });

    price_btn?.addEventListener('click', (e) => {
        e.preventDefault();
        toggleExclusive(price_submenu, price_btn);
    });

    sort_btn?.addEventListener('click', (e) => {
        e.preventDefault();
        toggleExclusive(sort_submenu, sort_btn);
    });

    filter_btn?.addEventListener('click', (e) => {
        e.preventDefault();
        toggleExclusive(filter_submenu, filter_btn);
    });

    sort_sp_btn?.addEventListener('click', (e) => {
        e.preventDefault();
        toggleExclusive(sort_submenu_sp, sort_sp_btn);
    });

    const sizeBoxes = document.querySelectorAll('.size-box');

    sizeBoxes.forEach(box => {
        box.addEventListener('click', () => {
            if (box.classList.contains('selected')) {
                box.classList.remove('selected');
            } else {
            box.classList.add('selected');
            }
        });
    });

    const sizeBoxes2 = document.querySelectorAll('.size-box-2');
    const sizeBoxesD = document.querySelectorAll('.size-box-d');
    const sizeBoxesP = document.querySelectorAll('.size-box-p');
    

        sizeBoxes2.forEach(box => {
            box.addEventListener('click', () => {
                sizeBoxes2.forEach(a => a.classList.remove("selected"));
                box.classList.add("selected");
            });
        });

        sizeBoxesD.forEach(box => {
            box.addEventListener('click', () => {
                sizeBoxesD.forEach(a => a.classList.remove("selected"));
                box.classList.add("selected");
            });
        });

        sizeBoxesP.forEach(box => {
            box.addEventListener('click', () => {
                sizeBoxesP.forEach(a => a.classList.remove("selected"));
                box.classList.add("selected");
            });
        });

    const ages = document.querySelectorAll(".choose-age");
    const sex = document.querySelectorAll(".choose-sex");

    ages.forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains('selected')) {
                item.classList.remove('selected');
            } else {
            item.classList.add('selected');
            }
        });
    });

    sex.forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains('selected')) {
                item.classList.remove('selected');
            } else {
                item.classList.add('selected');
            }
        });
    })

    document.querySelectorAll('#sort-submenu .sort-option').forEach(opt => {
        opt.addEventListener('click', e => {
            e.preventDefault();
            document.querySelectorAll('#sort-submenu .sort-option').forEach(o => o.classList.remove('active'));
            const picked = e.currentTarget;
            picked.classList.add('active');
            sort_label.textContent = picked.textContent.trim();
            sort_btn.classList.remove('active');
        });
    });

    document.querySelectorAll('#sort-submenu-sp .sort-option-sp').forEach(opt => {
        opt.addEventListener('click', e => {
            e.preventDefault();
            document.querySelectorAll('#sort-submenu-sp .sort-option-sp').forEach(o => o.classList.remove('active'));
            const picked = e.currentTarget;
            picked.classList.add('active');
            sort_btn.classList.remove('active');
        });
    });


    document.addEventListener('click', (e) => {
        const clickedInside = [...buttons, ...submenus]
        .some(el => el && (el === e.target || el.contains(e.target)));
        if (!clickedInside) {
            submenus.forEach(m => m.classList.remove('show'));
            buttons.forEach(b => b.classList.remove('active'));
        }
    });

    const sizes_sp_btn = document.getElementById('sizes-sp-btn');
    const sizes_submenu_sp = document.getElementById('sizes-submenu-sp');

    const color_sp_btn = document.getElementById('color-sp-btn');
    const color_submenu_sp = document.getElementById('color-submenu-sp');

    const price_sp_btn = document.getElementById('price-sp-btn');
    const price_submenu_sp = document.getElementById('price-submenu-sp');

    const age_sp_btn = document.getElementById('age-sp-btn');
    const age_submenu_sp = document.getElementById('age-submenu-sp');

    const sex_sp_btn = document.getElementById('sex-sp-btn');
    const sex_submenu_sp = document.getElementById('sex-submenu-sp');

    const season_sp_btn = document.getElementById('season-sp-btn');
    const season_submenu_sp = document.getElementById('season-submenu-sp');

    sizes_sp_btn?.addEventListener('click', () => {
        if (!sizes_submenu_sp.classList.contains('show')) {
            sizes_submenu_sp.classList.add('show');
            document.getElementById("open-arrow-sizes").classList.add('active');
        } else {
            sizes_submenu_sp.classList.remove('show');
            document.getElementById("open-arrow-sizes").classList.remove('active');
        }
    });

    color_sp_btn?.addEventListener('click', () => {
        if(!color_submenu_sp.classList.contains('show')) {
            color_submenu_sp.classList.add('show');
            document.getElementById("open-arrow-color").classList.add('active');
        } else {
            color_submenu_sp.classList.remove('show');
            document.getElementById("open-arrow-color").classList.remove('active');
        }
    });

    price_sp_btn?.addEventListener('click', () => {
        if(!price_submenu_sp.classList.contains('show')) {
            price_submenu_sp.classList.add('show');
            document.getElementById("open-arrow-price").classList.add('active');
        } else {
            price_submenu_sp.classList.remove('show');
            document.getElementById("open-arrow-price").classList.remove('active');
        }
    });

    age_sp_btn?.addEventListener('click', () => {
        if(!age_submenu_sp.classList.contains('show')) {
            age_submenu_sp.classList.add('show');
            document.getElementById("open-arrow-age").classList.add('active');
        } else {
            age_submenu_sp.classList.remove('show');
            document.getElementById("open-arrow-age").classList.remove('active');
        }
    });

    sex_sp_btn?.addEventListener('click', () => {
        if(!sex_submenu_sp.classList.contains('show')) {
            sex_submenu_sp.classList.add('show');
            document.getElementById("open-arrow-sex").classList.add('active');
        } else {
            sex_submenu_sp.classList.remove('show');
            document.getElementById("open-arrow-sex").classList.remove('active');
        }
    });

    season_sp_btn?.addEventListener('click', () => {
        if(!season_submenu_sp.classList.contains('show')) {
            season_submenu_sp.classList.add('show');
            document.getElementById("open-arrow-season").classList.add('active');
        } else {
            season_submenu_sp.classList.remove('show');
            document.getElementById("open-arrow-season").classList.remove('active');
        }
    });

    const ages_sp = document.querySelectorAll(".choose-age-sp");
    const sex_sp = document.querySelectorAll(".choose-sex-sp");
    const season_sp = document.querySelectorAll(".choose-season-sp");
    
    ages_sp.forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains('selected')) {
                item.classList.remove('selected');
            } else {
            item.classList.add('selected');
            }
        });
    });

    sex_sp.forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains('selected')) {
                item.classList.remove('selected');
            } else {
            item.classList.add('selected');
            }
        });
    });

    season_sp.forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains('selected')) {
                item.classList.remove('selected');
            } else {
            item.classList.add('selected');
            }
        });
    });

});

//delivery and payment
document.addEventListener('DOMContentLoaded', () => {
    const NP_DATA = {
        'Київська': {
        'Київ': [
            'Відділення №1 (вул. Хрещатик, 1)',
            'Відділення №2 (просп. Перемоги, 10)',
            'Відділення №3 (вул. Саксаганського, 50)'
        ],
        'Боярка': [
            'Відділення №1 (вул. Соборності, 12)'
        ],
        'Бровари': [
            'Відділення №1 (вул. Незалежності, 3)',
            'Відділення №2 (бул. Шевченка, 25)'
        ]
        },
        'Львівська': {
        'Львів': [
            'Відділення №1 (просп. Свободи, 15)',
            'Відділення №2 (вул. Наукова, 7)'
        ],
        'Дрогобич': [
            'Відділення №1 (вул. Грушевського, 8)'
        ]
        },
        'Одеська': {
        'Одеса': [
            'Відділення №1 (вул. Дерибасівська, 10)',
            'Відділення №2 (Фонтанська дорога, 25)'
        ]
        }
    };
    const buttons = document.querySelectorAll('.option-delivery');
    const addressSection = document.getElementById('address-section');
    const region = document.getElementById('region');
    const city = document.getElementById('city');
    const branchWrap = document.getElementById('branch-wrap');
    const branchSelect = document.getElementById('branch');
    const fullAddrWrap  = document.getElementById('fulladdr-wrap');
    const fullAddress   = document.getElementById('full-address');
    const show = el => el && el.classList.remove('hidden');
    const hide = el => el && el.classList.add('hidden');
    const enable = el => { if (el) el.disabled = false; };
    const disable = el => { if (el) { el.disabled = true; el.removeAttribute('required'); } };
    const req = (el, v = true) => { if (el) el.required = v; };
    const reset  = el => {
        if (!el) return;
        if (el.tagName === 'SELECT') el.selectedIndex = 0;
        else if (el.tagName === 'INPUT') el.value = '';
    };
    const setOptions = (select, items, placeholder) => {
        if (!select) return;
        const opts = [`<option value="" selected disabled>${placeholder}</option>`]
        .concat((items || []).map(v => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`));
        select.innerHTML = opts.join('');
    };
    function escapeHtml(s) {
        return String(s)
        .replaceAll('&','&amp;')
        .replaceAll('<','&lt;')
        .replaceAll('>','&gt;')
        .replaceAll('"','&quot;')
        .replaceAll("'",'&#39;');
    }
    let currentMode = null;
    function clearActiveButtons() {
        buttons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed','false'); });
    }
    function initState() {
        hide(addressSection);
        hide(branchWrap);
        hide(fullAddrWrap);
        [region, city, branchSelect, fullAddress].forEach(el => { disable(el); reset(el); });
        const regions = Object.keys(NP_DATA);
        if (regions.length && region.options.length <= 1) {
        setOptions(region, regions.sort(), 'Область');
        }
    }
    function pickMode(mode, btnEl) {
        currentMode = mode;
        clearActiveButtons();
        if (btnEl) { btnEl.classList.add('active'); btnEl.setAttribute('aria-pressed','true'); }
        show(addressSection);
        if (mode === 'branch') {
        enable(region); req(region); reset(region);
        disable(city); req(city); reset(city);
        show(branchWrap); disable(branchSelect); req(branchSelect);
        hide(fullAddrWrap); disable(fullAddress); reset(fullAddress);
        } 
        else if (mode === 'courier') {
        enable(region); req(region); reset(region);
        disable(city); req(city); reset(city);
        show(fullAddrWrap); disable(fullAddress); req(fullAddress);
        hide(branchWrap);  disable(branchSelect); reset(branchSelect);
        }
    }
    region.addEventListener('change', () => {
        const r = region.value;
        const cities = r && NP_DATA[r] ? Object.keys(NP_DATA[r]).sort() : [];
        setOptions(city, cities, 'Місто');
        enable(city); req(city, true);
        setOptions(branchSelect, [], 'Відділення Нової Пошти');
        disable(branchSelect); reset(branchSelect);
    });
    city.addEventListener('change', () => {
        const r = region.value;
        const c = city.value;
        const branches = (r && c && NP_DATA[r] && NP_DATA[r][c]) ? [...NP_DATA[r][c]] : [];
        setOptions(branchSelect, branches, 'Відділення Нової Пошти');
        if (currentMode === 'branch') {
        show(branchWrap); enable(branchSelect); req(branchSelect, true);
        hide(fullAddrWrap); disable(fullAddress); reset(fullAddress);
        } else {
        hide(branchWrap); disable(branchSelect); reset(branchSelect);
        show(fullAddrWrap); enable(fullAddress); req(fullAddress, true);
        }
    });
    buttons.forEach(btn => {
        btn.addEventListener('click', e => {
        e.preventDefault();
        const mode = btn.dataset.mode;
        pickMode(mode, btn);
        });
    });
    initState();
    const payButtons = document.querySelectorAll('.option-payment');
    const cardForm = document.getElementById('card-form');
    const ccNumber = document.getElementById('cc-number');
    const ccExp = document.getElementById('cc-exp');
    const ccCVV = document.getElementById('cc-cvv');
    const ccName = document.getElementById('cc-name');
    function clearActivePay() {
        payButtons.forEach(b => {b.classList.remove('active'); b.setAttribute('area-pressed','false'); });
    }
    function pickPayment(mode, btn) {
        clearActivePay();
        btn.classList.add('active');
        btn.setAttribute('aria-pressed','true');
        if(mode === 'card') {
            show(cardForm); cardForm.setAttribute('aria-hidden','false');
            [ccNumber, ccExp, ccCVV, ccName].forEach(el => {disabled(el); reset(el); });
        } else {
            hide(cardForm); cardForm.serAttribute('aria-hidden','true');
            [ccNumber, ccExp, ccCVV, ccName].forEach(el => {disabled(el); reset(el); });
        }
    }
    payButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            pickPayment(btn.dataset.pay, btn);
        });
    });
    ccNumber && ccNumber.addEventListener('input', () => {
        let digits = ccNumber.value.replace(/\D/g,'').slice(0,16);
        ccNumber.value = digits.replace(/(\d{4})(?=\d)/g,'$1 ').trim();
    });
    ccExp && ccExp.addEventListener('input', () => {
        let d = ccExp.value.replace(/\D/g,'').slice(0,4);
        ccExp.value = d.length >= 3 ? d.slice(0,2)+'/'+d.slice(2) : d;
    });
    ccCVV && ccCVV.addEventListener('input', () => {
        ccCVV.value = ccCVV.value.replace(/\D/g,'').slice(0,3);
    });
});

//
document.addEventListener('DOMContentLoaded', () => {

    const sizeLinks = document.querySelectorAll('.set-size');
    sizeLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            sizeLinks.forEach(l => l.parentElement.classList.remove('active'))
            link.parentElement.classList.add('active');
        });
    })
    const colorLinks = document.querySelectorAll('.set-color');
    colorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            colorLinks.forEach(l => l.parentElement.classList.remove('active'));
            link.parentElement.classList.add('active');
        });
    });
});

//pagination
document.addEventListener('DOMContentLoaded', () => {

    const totalPages = 17;
    const maxVisible = 5;

    let currentPage = 1;

    const pagesContainer = document.querySelector(".pages");
    const prevBtn = document.querySelector(".prevPage");
    const nextBtn = document.querySelector(".nextPage");

    function updateArrows() {
        prevBtn.setAttribute("aria-disabled", currentPage === 1 ? "true" : "false");
        nextBtn.setAttribute("aria-disabled", currentPage === totalPages ? "true" : "false");
    }

    function renderPagination() {
        pagesContainer.innerHTML = "";

        let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
        let end = start + maxVisible - 1;

        if (end > totalPages) {
            end = totalPages;
            start = Math.max(1, end - maxVisible + 1);
        };

        for (let i = start; i <= end; i++) {
            const btn = document.createElement("button");
            btn.textContent = i;
            if (i === currentPage) btn.classList.add('active');
            btn.addEventListener("click", () => {
                if(currentPage === i) return;
                const prevActive = pagesContainer.querySelector("button.active");
                prevActive?.classList.remove('active');
                btn.classList.add("active");
                currentPage = i;
                updateArrows();
                setTimeout(renderPagination, 300);
            });
            pagesContainer.appendChild(btn);
        }
        updateArrows();
    }

    prevBtn.addEventListener("click", () => {
        if(currentPage > 1) {
            const prevActive = pagesContainer.querySelector("button.active");
            const target = [...pagesContainer.children].find(b => +b.textContent === currentPage - 1);
            prevActive?.classList.remove("active");
            target.classList.add("active");
            currentPage--;
            updateArrows();
            setTimeout(renderPagination, 300);
        }
    });

    nextBtn.addEventListener("click", () => {
        if(currentPage < totalPages) {
            const prevActive = pagesContainer.querySelector("button.active");
            const target = [...pagesContainer.children].find(b => +b.textContent === currentPage + 1);
            prevActive?.classList.remove("active");
            target.classList.add("active");
            currentPage++;
            updateArrows();
            setTimeout(renderPagination, 300);
        }
    });

    renderPagination();
});

//navLinks
document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.nav-link').forEach(a=>{
        if (a.pathname === location.pathname) a.setAttribute('aria-current','page');
    });

    const lastCrumb = document.querySelector('.breadcrumbs [aria-current="page"]');
    const title = document.getElementById('page-title');
    if (lastCrumb && title) title.textContent = lastCrumb.textContent.trim();
});

//likes and cart
document.addEventListener('DOMContentLoaded', () => {
    const like = document.querySelectorAll('.like-this');
    const cart = document.querySelectorAll('.btn-buy');

    like.forEach(btn => {
        const img = btn.querySelector('img');
        btn.addEventListener('click', () => {
            if(img.src.includes('likes.png')) {
                img.src = 'images/like-active.png'
            } else {
                img.src = 'images/likes.png'
            }
        })
    })

    cart.forEach(btn => {
        const img = btn.querySelector('img');
        btn.addEventListener('click', () => {
            if(img.src.includes('cart.png')) {
                img.src = 'images/cart-active.png'
            } else {
                img.src = 'images/cart.png'
            }
        })
    })
});

//to top button
document.addEventListener('DOMContentLoaded', () => {
    const toTopBtn = document.getElementById("toTopBtn");
    window.addEventListener("scroll", () => {
        if(window.scrollY > 300) {
            toTopBtn.classList.add("show");
        }else {
            toTopBtn.classList.remove("show");
        }
    });
    toTopBtn.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: "smooth" });
    });
});

//review
document.addEventListener('DOMContentLoaded', () => {

    const open_rev = document.getElementById('open-rev');
    const rev_container = document.getElementById('rev-container');
    const close_rev = document.getElementById('close-rev');

    open_rev?.addEventListener('click', () => {
        rev_container.classList.add('show');
    });

    close_rev?.addEventListener('click', () => {
        rev_container.classList.remove('show');
    });

    rev_container?.addEventListener('click', (e) => {
        if(e.target === rev_container) {
            rev_container.classList.remove('show');
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.key === "Escape") {
            rev_container.classList.remove('show');
        }
    });


    function escapeHTML(s) {
        return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    };

    function isoToday() {
        return (new Date()).toISOString().slice(0,10);
    };

    function formatDate(iso) {
        try { return new Date(iso).toLocaleDateString('uk-UA'); } catch(e) { return iso; }
    };

    const reviewsBlock = document.getElementById('reviewsBlock');
    const productId = reviewsBlock.dataset.productId || 'product-unknown';
    const LS_KEY = 'reviews_' + productId;

    const reviewsList = document.getElementById('reviewsList');
    const reviewsMeta = document.getElementById('reviewsMeta');
    const productRatingSummary = document.getElementById('productRatingSummary');
    const form = document.getElementById('reviewForm');
    const inputName = document.getElementById('reviewName');
    const inputText = document.getElementById('reviewText');
    const starButtons = Array.from(document.querySelectorAll('.star-btn'));
    const submitBtn = document.getElementById('submitBtn');

    let reviews = [];
    let currentRating = 0; 

    function loadReviews() {
        const raw = localStorage.getItem(LS_KEY);
        if (!raw) {
            const sample = [
            { id: genId(), name: 'Ліля М.', rating: 4.5, text: 'Гарна сукня з дуже комфортним матеріалом', date: '2024-10-18' },
            { id: genId(), name: 'Марічка А.', rating: 5, text: 'Сукня чудова, виглядає як на фото', date: '2024-10-18' },
            { id: genId(), name: 'Ріма К.', rating: 5, text: 'Класний фасон, чудово сіла по фігурі', date: '2024-10-18' },
            ];
            reviews = sample;
            saveReviews();
            return;
        }
        try {
            reviews = JSON.parse(raw);
        } catch(e) {
            reviews = [];
        }
    };

    function saveReviews() {
        localStorage.setItem(LS_KEY, JSON.stringify(reviews));
    };

    function genId() {
      return 'r_' + Math.random().toString(36).slice(2,9);
    };

    function avgRating(arr) {
        if (!arr.length) return 0;
        return arr.reduce((s,x)=> s + Number(x.rating), 0) / arr.length;
    };

    function renderSummary() {
        const avg = avgRating(reviews);
        const roundedAvg = avg.toFixed(1);

        reviewsMeta.textContent = `${reviews.length} відгуків · ${roundedAvg}`;
        
        if (productRatingSummary) {
            productRatingSummary.innerHTML = `
                <span class="stars">${renderStars(avg)}</span> 
                <span class="rating-num">${roundedAvg}</span>
            `;
        }
    }

    function createReviewNode(r) {
        const el = document.createElement('div');
        el.className = 'review';
        if (r.featured) el.classList.add('featured'); // optional
        el.setAttribute('role','listitem');
        el.dataset.id = r.id;

        el.innerHTML = `
                <div class="avatar" aria-hidden="true"></div>
                <div class="rev-top">
                    <div><span class="name">${escapeHTML(r.name)}</span></div>
                    <div class="date">${formatDate(r.date)}</div>
                </div>
                <div class="meta"><span class="stars" aria-hidden="true">${renderStars(r.rating)}</span><span class="rating-num">${Number(r.rating).toFixed(1)}</span></div>
                <div class="text">${escapeHTML(r.text)}</div>
        `;
        return el;
    };

    function renderStars(v) {
        const filled = Math.round(v);
        return '★'.repeat(filled) + '☆'.repeat(5 - filled);
    };

    function renderStars(avg) {
        const filled = Math.round(avg);
        const empty = 5 - filled;
        return '★'.repeat(filled) + '☆'.repeat(empty);
    }

    function renderAll() {
        reviewsList.innerHTML = '';
        if (!reviews.length) {
            reviewsList.innerHTML = '<div class="empty">Поки що немає відгуків. Стань першим 😊</div>';
            renderSummary();
            return;
        }
        const sorted = reviews.slice().sort((a,b)=> new Date(b.date) - new Date(a.date));
        sorted.forEach(r => reviewsList.appendChild(createReviewNode(r)));
        renderSummary();
    };

    function setStarUI(value) {
        currentRating = Number(value);
        starButtons.forEach(btn => {
            const v = Number(btn.dataset.value);
            btn.classList.toggle('active', v <= currentRating);
            btn.setAttribute('aria-checked', v === currentRating ? 'true' : 'false');
        });
    };

    starButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const val = Number(btn.dataset.value);
            setStarUI(val);
        });
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = inputName.value.trim();
        const text = inputText.value.trim();
        const rating = currentRating || 5;

        if (!name) { inputName.focus(); return; }
        if (!text) { inputText.focus(); return; }

        submitBtn.disabled = true;

        const item = {
            id: genId(),
            name,
            text,
            rating,
            date: isoToday(),
        };

        reviews.unshift(item);
        saveReviews();
        renderAll();
        form.reset();
        setStarUI(5);
        submitBtn.disabled = false;
        inputName.focus();
        rev_container.classList.remove('show');
    });

    (function init(){
        loadReviews();
        renderAll();
        setStarUI(5);
    })();

    function setStarUI(value) {
        currentRating = value;
        starButtons.forEach(btn => {
            const v = Number(btn.dataset.value);
            btn.classList.toggle('active', v <= currentRating);
            btn.textContent = v <= currentRating ? '★' : '☆';
        });
    }

    starButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const val = Number(btn.dataset.value);
            setStarUI(val);
        });
    });
});

//gallery
document.addEventListener('DOMContentLoaded', () => {

    (function () {
        const thumbsWrap = document.getElementById('thumbs');
        const mainImg = document.getElementById('mainImg');
        if(!thumbsWrap || !mainImg) return;

        const thumbs = document.querySelectorAll('.pg-thumb')

        function getFullFrom(anchor) {
            return anchor.dataset.full
            || anchor.querySelector('img')?.dataset.full
            || '';
        };
        function selectThumb(anchor) {
            const full = getFullFrom(anchor);
            if (!full) return;

            thumbs.forEach(a => {
                a.classList.remove('is-active');
            });
            anchor.classList.add('is-active');

            if (mainImg.src === full) return;
            mainImg.style.opacity = '0';
            const pre = new Image();
            pre.onload = () => {
                mainImg.src = full;
                mainImg.style.opacity = '1';
            };
            pre.src = full;
        };

        thumbs.forEach(a => {
            a.addEventListener('mouseenter', () => {
                if (window.innerWidth < 768) return;
                selectThumb(a);
            });
        });
        thumbs.forEach(a => {
            a.addEventListener('click', e => {
                e.preventDefault();
                Fancybox.show(
                    Array.from(thumbs).map(t => ({src: t.dataset.full, type:'image' })),
                    { startIndex: Array.from(thumbs).indexOf(a)}
                );
            });
        });
        mainImg.addEventListener('click', () => {
            Fancybox.show(
                Array.from(thumbs).map(t => ({src: t.dataset.full, type:'image'})),
                { startIndex: Array.from(thumbs).findIndex(t => t.dataset.full === mainImg.src)}
            );
        });
    })();
});

// Вам може сподобатись карусель 
document.addEventListener('DOMContentLoaded', () => {
   (function(){
        const track = document.querySelector('.catalogue2_outer');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        if (!track) return;

        // state
        let index = 0;
        let perView = 4;
        let gap = 18;

        function totalItems(){ return track.children.length; }
        function calcPerView(){
            if(window.innerWidth < 375) { return 1}
            else if(window.innerWidth < 768) { return 2}
            else{return 4} 
        }
        function getGap(){ const g = getComputedStyle(track).gap; return g ? parseFloat(g) : 18; }

        function calcLayout(){
            perView = calcPerView();
            gap = getGap();

            const trackWidth = track.clientWidth;
            const totalGapsWidth = gap * Math.max(0, perView - 1);
            const availableForItems = Math.max(0, trackWidth - totalGapsWidth);
            const itemWidth = Math.max(60, Math.floor(availableForItems / perView));

            Array.from(track.children).forEach(child => {
                child.style.boxSizing = 'border-box';
                child.style.width = itemWidth + 'px';
                child.style.flex = '0 0 auto';
                child.style.scrollSnapAlign = 'start';
            });

            // переконаємось, що index не виходить за межі
            if(index >= totalItems()) index = totalItems() - 1;

            updateButtons();
        }

        function scrollToIndex(i){
            const total = totalItems();
            const trackWidth = track.clientWidth;

            // ширина одного блоку + gap
            const first = track.children[0];
            if(!first) return;
            const childWidth = first.getBoundingClientRect().width;
            const step = childWidth + gap;

            // maxIndex - останній index, при якому видно останній блок
            const maxIndex = Math.max(0, total - Math.floor(trackWidth / childWidth));

            index = Math.min(Math.max(0, i), maxIndex);

            const target = track.children[index];
            if(!target){ updateButtons(); return; }

            let offset = track.scrollLeft + (target.getBoundingClientRect().left - track.getBoundingClientRect().left);

            const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth);
            const clamped = Math.min(maxScrollLeft, Math.max(0, Math.round(offset)));

            try {
                track.scrollTo({ left: clamped, behavior: 'smooth' });
            } catch(e) {
                track.scrollLeft = clamped;
            }

            updateButtons();
        }

        function updateButtons(){
            const total = totalItems();
            const trackWidth = track.clientWidth;
            const first = track.children[0];
            if(!first) return;
            const childWidth = first.getBoundingClientRect().width;

            // максимальний index, при якому останній блок видно
            const maxIndex = Math.max(0, total - Math.floor(trackWidth / childWidth));

            if(prevBtn) prevBtn.disabled = index <= 0;
            if(nextBtn) nextBtn.disabled = index >= maxIndex;
        }

        if(prevBtn) prevBtn.addEventListener('click', () => scrollToIndex(index - 1));
        if(nextBtn) nextBtn.addEventListener('click', () => scrollToIndex(index + 1));

        // ручний скрол
        function onScrollUpdateIndex(){
            const scroll = track.scrollLeft;
            const first = track.children[0];
            if(!first) return;
            const childWidth = first.getBoundingClientRect().width + gap;
            const newIndex = Math.round(scroll / childWidth);
            index = Math.min(Math.max(0, newIndex), totalItems() - 1);
            updateButtons();
        }

        let scrollThrottleTimer;
        track.addEventListener('scroll', () => {
            if(scrollThrottleTimer) return;
            scrollThrottleTimer = setTimeout(() => {
                onScrollUpdateIndex();
                scrollThrottleTimer = null;
            }, 100);
        }, { passive: true });

        // ресайз
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                calcLayout();
                scrollToIndex(index);
            }, 120);
        });

        // ініціалізація після завантаження картинок
        function init(){
            const imgs = track.querySelectorAll('img');
            let imgsToLoad = 0;
            imgs.forEach(img => { if(!img.complete) imgsToLoad++; });

            if(imgsToLoad > 0){
                let loaded = 0;
                imgs.forEach(img => {
                    if(img.complete){ loaded++; return; }
                    img.addEventListener('load', () => { loaded++; if(loaded >= imgsToLoad) calcLayout(); });
                    img.addEventListener('error', () => { loaded++; if(loaded >= imgsToLoad) calcLayout(); });
                });
                setTimeout(calcLayout, 300);
            } else {
                calcLayout();
            }
        }

        document.addEventListener('DOMContentLoaded', init);
        if(document.readyState === 'complete' || document.readyState === 'interactive') init();

    })();

    (function(){
        const track = document.querySelector('.second_outer');
        const prevBtn = document.getElementById('second_prev');
        const nextBtn = document.getElementById('second_next');
        if (!track) return;

        // state
        let index = 0;
        let perView = 4;
        let gap = 18;

        function totalItems(){ return track.children.length; }
        function calcPerView(){
            if(window.innerWidth < 404) { return 1}
            else if(window.innerWidth < 768) { return 2}
            else{return 4} 
        }
        function getGap(){ const g = getComputedStyle(track).gap; return g ? parseFloat(g) : 18; }

        function calcLayout(){
            perView = calcPerView();
            gap = getGap();

            const trackWidth = track.clientWidth;
            const totalGapsWidth = gap * Math.max(0, perView - 1);
            const availableForItems = Math.max(0, trackWidth - totalGapsWidth);
            const itemWidth = Math.floor(availableForItems / perView);

            Array.from(track.children).forEach(child => {
                child.style.boxSizing = 'border-box';
                child.style.width = itemWidth + 'px';
                child.style.flex = '0 0 auto';
                child.style.scrollSnapAlign = 'start';
            });

            // переконаємось, що index не виходить за межі
            if(index >= totalItems()) index = totalItems() - 1;

            updateButtons();
        }

        function scrollToIndex(i){
            const total = totalItems();
            const trackWidth = track.clientWidth;

            // ширина одного блоку + gap
            const first = track.children[0];
            if(!first) return;
            const childWidth = first.getBoundingClientRect().width;
            const step = childWidth + gap;

            // maxIndex - останній index, при якому видно останній блок
            const maxIndex = Math.max(0, total - Math.floor(trackWidth / childWidth));

            index = Math.min(Math.max(0, i), maxIndex);

            const target = track.children[index];
            if(!target){ updateButtons(); return; }

            let offset = track.scrollLeft + (target.getBoundingClientRect().left - track.getBoundingClientRect().left);

            const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth);
            const clamped = Math.min(maxScrollLeft, Math.max(0, Math.round(offset)));

            try {
                track.scrollTo({ left: clamped, behavior: 'smooth' });
            } catch(e) {
                track.scrollLeft = clamped;
            }

            updateButtons();
        }

        function updateButtons(){
            const total = totalItems();
            const trackWidth = track.clientWidth;
            const first = track.children[0];
            if(!first) return;
            const childWidth = first.getBoundingClientRect().width;

            // максимальний index, при якому останній блок видно
            const maxIndex = Math.max(0, total - Math.floor(trackWidth / childWidth));

            if(prevBtn) prevBtn.disabled = index <= 0;
            if(nextBtn) nextBtn.disabled = index >= maxIndex;
        }

        if(prevBtn) prevBtn.addEventListener('click', () => scrollToIndex(index - 1));
        if(nextBtn) nextBtn.addEventListener('click', () => scrollToIndex(index + 1));

        // ручний скрол
        function onScrollUpdateIndex(){
            const scroll = track.scrollLeft;
            const first = track.children[0];
            if(!first) return;
            const childWidth = first.getBoundingClientRect().width + gap;
            const newIndex = Math.round(scroll / childWidth);
            index = Math.min(Math.max(0, newIndex), totalItems() - 1);
            updateButtons();
        }

        let scrollThrottleTimer;
        track.addEventListener('scroll', () => {
            if(scrollThrottleTimer) return;
            scrollThrottleTimer = setTimeout(() => {
                onScrollUpdateIndex();
                scrollThrottleTimer = null;
            }, 100);
        }, { passive: true });

        // ресайз
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                calcLayout();
                scrollToIndex(index);
            }, 120);
        });

        // ініціалізація після завантаження картинок
        function init(){
            const imgs = track.querySelectorAll('img');
            let imgsToLoad = 0;
            imgs.forEach(img => { if(!img.complete) imgsToLoad++; });

            if(imgsToLoad > 0){
                let loaded = 0;
                imgs.forEach(img => {
                    if(img.complete){ loaded++; return; }
                    img.addEventListener('load', () => { loaded++; if(loaded >= imgsToLoad) calcLayout(); });
                    img.addEventListener('error', () => { loaded++; if(loaded >= imgsToLoad) calcLayout(); });
                });
                setTimeout(calcLayout, 300);
            } else {
                calcLayout();
            }
        }

        document.addEventListener('DOMContentLoaded', init);
        if(document.readyState === 'complete' || document.readyState === 'interactive') init();

    })();
});

//approve password
document.addEventListener('DOMContentLoaded', () => {
    const forgot = document.querySelector('.forgetPass');
    const forgot_container = document.querySelector('.forgot-pass-overlay');

    forgot?.addEventListener('click', () => {
        forgot_container.classList.add('show');
    });
    forgot_container?.addEventListener('click', (e) => {
        if(e.target === forgot_container) {
            forgot_container.classList.remove('show');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.switch');
    const choose = document.querySelector('.choose');
    const text = document.getElementById('top-text');

    choose.addEventListener('click', () => {
        if(input.type === 'email') {
            input.type = 'tel';
            input.placeholder ='Номер телефону';
            choose.textContent = 'Надіслати код на електрону пошту';
            text.textContent = 'Введіть свій номер телефону та впишіть правильний код для зміни пароля';
        } else {
            input.type = 'email';
            input.placeholder ='E-mail';
            choose.textContent = 'Надіслати код на номер телефону';
            text.textContent = 'Перевірте свою електрону пошту та впишіть правильний код для зміни пароля';
        }
    });
});

//Order Quantity and color
document.addEventListener('DOMContentLoaded', () => {
    const minus = document.querySelector('.minus');
    const plus = document.querySelector('.plus');
    const howMany = document.querySelector('.how-many');

    minus?.addEventListener('click', () => {
        if(howMany.value === '1'){return};
        howMany.value--;
    })
    plus?.addEventListener('click', () => {
        if(howMany.value === '10'){return};
        howMany.value++;
    })
});

document.addEventListener('DOMContentLoaded', () => {
    const colorSelect = document.getElementById('colorSelect');

    function updateColorSelect(){
        colorSelect.style.backgroundColor = colorSelect.value;
    }
    updateColorSelect();
    colorSelect.addEventListener('change', updateColorSelect);
});