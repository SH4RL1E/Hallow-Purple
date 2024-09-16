function Timer(duration, element) {
	var self = this;
	this.duration = duration;
	this.element = element;
	this.running = false;
	
	this.els = {
		ticker: document.getElementById('ticker'),
		seconds: document.getElementById('seconds'),
	};
	
	var hammerHandler = new Hammer(this.element);
	hammerHandler.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });
	hammerHandler.on('panup pandown', function(ev) {
	});
	
	hammerHandler.on('tap', function() {
		if (self.running) {
			self.reset();
		} else {
			self.start();
		}
	})
}

Timer.prototype.start = function() {
	var self = this;
	var start = null;
	this.running = true;
	var remainingSeconds = this.els.seconds.textContent = this.duration / 1000;
	
}

/*tulog sa ko yw 
