x=$(document);
x.ready(inicio);
function inicio(){
	$('#dama').hide();
	$('#caballero').hide();
	var val;
	$('select#tipo').on('change',(function() {
		val=$(this).val();
		tallas(val);
	}));
	productos();
// Botones
	zapato();
};
function zapato(){
	var guardarZapato= $('#zap button');
	guardarZapato.click(function() {
		
	});
}
function tallas(tipo){
	var obj;
	switch (tipo){
		case 'infantil':
			$('#infantil').show();
			$('#dama').hide();			
			$('#caballero').hide();			
		break
		case 'dama':
			$('#infantil').hide();
			$('#dama').show();			
			$('#caballero').hide();
		break
		case 'caballero':
			$('#infantil').hide();
			$('#dama').hide();			
			$('#caballero').show();
		break
		default:
			$('#infantil').show();
			$('#dama').hide();			
			$('#caballero').hide();
		break		
		}
}
function productos(){
	var valor;
	zap=$('#zap');	bolsa=$('#bolsa'); otro=$('#otros');
	sec='Zapatos';
	
	$('select#producto').on('change',function(){
	    var valor = $(this).val();
	    mostrar(valor);
	});
	$('#id').on('change',function() {
		if(this.val()==''){
			
		}
	});

	$('.env').click(function() {
		// alert("Se actualizo el producto");
		$('.size').val('');
		$('#cantidad').val('');
	});
}
function mostrar(va){
	switch(va){
		case 'Zapatos':
			sec=va;
			zap.show('fast');
			bolsa.hide('fast');
			otro.hide('fast'); 
		break
		case 'Carteras':
			sec=va;
			zap.hide('fast');
			bolsa.show('fast');
			otro.hide('fast');
		break
		case 'Bolsas':
			sec=va;
			zap.hide('fast');
			bolsa.show('fast');
			otro.hide('fast');
		break
		case 'Otros':
			sec=va;
			zap.hide('fast');
			bolsa.hide('fast');
			otro.show('fast');
		break
		default:
			sec="";
			zap.hide('fast');
			bolsa.hide('fast');
			otro.hide('fast'); 
		break
	}
	$('#pro').text(sec);
};