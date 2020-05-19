let button= document.querySelector(".menu-icon");
let dropForm= document.querySelector(".drop-form");
let adress=document.querySelector(".where-from");
let promo = document.querySelector(".promo");
let container=document.querySelector(".container");


let parent = document.querySelector('.container');
let menuparent = document.querySelector('.header-top');


 var createPromo = function(){
	let main_div = document.createElement('div');
	main_div.classList.add('promo');
	let first_div = document.createElement('div');
	first_div.classList.add('promo-title');
		let first_div_span = document.createElement('span');
		first_div_span.classList.add('first');
		first_div_span.textContent="Первая";
	first_div.append(first_div_span);
	first_div.append(' образовательная онлайн-платформа, созданная преподами!');
	main_div.append(first_div);
	let paragraph = document.createElement('p');
	paragraph.textContent="Описание уникального торгового предложения или же описание названия того или иного продукта, который на первом экране";
	main_div.append(paragraph);

	let reg_btn = document.createElement('a');
	reg_btn.classList.add('btn-header');
	reg_btn.href="#";
	reg_btn.textContent="Зарегистрироваться";
	main_div.append(reg_btn);
	parent.append(main_div);

};
var createMemu = function(){
	let menu_block = document.createElement('div');
	menu_block.classList.add('menu-block');
		let main_menu = document.createElement('div');
		main_menu.classList.add('main-menu');
		let list = document.createElement('ul');
			//first
			let list_item_first = document.createElement('li');
			list_item_first.classList.add('reference');
			let list_item_first_a = document.createElement('a');
			list_item_first_a.href="#";
			list_item_first_a.textContent="О проекте";
			list_item_first.append(list_item_first_a);
			list.append(list_item_first);
			//second
			let list_item_second = document.createElement('li');
			list_item_second.classList.add('reference');
			let list_item_second_a = document.createElement('a');
			list_item_second_a.href="#";
			list_item_second_a.textContent="Онлайн-курсы";
			list_item_second.append(list_item_second_a);
			list.append(list_item_second);
			//third
			let list_item_third = document.createElement('li');
			list_item_third.classList.add('reference');
			let list_item_third_a = document.createElement('a');
			list_item_third_a.href="#";
			list_item_third_a.textContent="Статьи";
			list_item_third.append(list_item_third_a);
			list.append(list_item_third);

	main_menu.append(list);
	menu_block.append(main_menu);
	let hrLine = document.createElement('hr');
	menu_block.append(hrLine);

	let dopForm = document.createElement('div');
	dopForm.classList.add('dop-form');
			
			let list_2 = document.createElement('ul');
				//first
				let list_2_item_first = document.createElement('li');
				
				let list_2_item_first_a = document.createElement('a');
				list_2_item_first_a.classList.add('forma');
				list_2_item_first_a.href="#";
				list_2_item_first_a.textContent="Регистрация";
				list_2_item_first.append(list_2_item_first_a);
				list_2.append(list_2_item_first);
				//second
				let list_2_item_second = document.createElement('li');
				
				let list_2_item_second_a = document.createElement('a');
				list_2_item_second_a.classList.add('forma');
				list_2_item_second_a.href="#";
				list_2_item_second_a.textContent="Вход";
				list_2_item_second.append(list_2_item_second_a);
				list_2.append(list_2_item_second);
				//third
				let list_2_item_third = document.createElement('li');
				
				let list_2_item_third_a = document.createElement('a');
				list_2_item_third_a.classList.add('to-prepod');
				list_2_item_third_a.href="#";
				list_2_item_third_a.textContent="Преподавателям";
				list_2_item_third.append(list_2_item_third_a);
				list_2.append(list_2_item_third);

			dopForm.append(list_2);


	menu_block.append(dopForm);	
	menuparent.append(menu_block);
};



createPromo();




button.addEventListener("click", function() {



    if (adress.classList.contains("hidden")) {
        adress.classList.remove("hidden");
         button.classList.remove("active");
         let main = document.querySelector(".menu-block");
		main.remove();
         createPromo();
        container.style.background='url("img/bg-3.png")';
      }
     else{
     	container.style.background="#25262a";
		adress.classList.add("hidden");
		 button.classList.add("active");
		let promo = document.querySelector(".promo");
		promo.remove();
		createMemu();
     }
//promo.classList.add("hidden");   
  });

/*container.style.background="url("img/bg-3.png")";*/

