;(() => {
    function useIsotope(event) {

		let isotopeGrid = new Isotope( '.portfolio_works', {
			itemSelector: '.portfolio_works__item',
			layoutMode: 'masonry',
			masonry: {
				horizontalOrder: true

			}
		});

        let applyFilterFromLink = (linkObject) => {
            let filterValue = linkObject.dataset.filter;
            // let filterValue = event.target.dataset.filter;
            // use matching filter function
            isotopeGrid.arrange({ filter: filterValue });
        };

        let filterGrid = function( event ) {
            event.preventDefault();

            applyFilterFromLink(this);

            let activeBtn = document.querySelector('.active_item');
            if (activeBtn) {
                activeBtn.classList.remove('active_item');
            }
            this.classList.add('active_item');
        };

        document.querySelectorAll('.portfolio_item').forEach(filterBtn => {
            filterBtn.addEventListener( 'click', filterGrid);
        });


        let activeBtn = document.querySelector('.active_item');

        applyFilterFromLink(activeBtn);
    }

    document.addEventListener('DOMContentLoaded', useIsotope);
})();
