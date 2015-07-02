function openSection(tab) {
	var name = $(tab).attr('href').split('#')[1];

	var menuItems = $('nav li');
	menuItems.removeClass('active');
	$(tab).parent().addClass('active');

	var sections = $('section');
	var newActiveSection = $('section#' + name);
	sections.addClass('hidden');
	sections.removeClass('active');
	newActiveSection.removeClass('hidden');
	newActiveSection.addClass('active');
}

$('nav li').on('click', openSection);
