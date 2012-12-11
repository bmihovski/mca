

public dynamic class Base_web_indexView extends View {
    function Base_web_indexView(c: Controller) {
        super(c)
    }

    override public function render() {

write("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">
<html xmlns=\"http://www.w3.org/1999/xhtml\">
<head>
	<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">
	<meta name=\"Language\" content=\"ES\">
	<meta name=\"Description\" content=\"InfoCam\">
	<meta name=\"keywords\" content=\"InfoCam\">
	<meta name=\"Copyright\" content=\"InfoCam\">
	");
stylesheet(["/infocam/web/style/style.css" ]); 
write("
	");
stylesheet(["/infocam/web/style/typo.css" ]); 
write("
</head>
<body>
	<div class=\"cabecera\">
		<div class=\"cabeceraCont\">
			<div class=\"logo\"></div>
			<div class=\"contmenu\">
				<div class=\"menu\"><a href=\"/infocam/Network\" class=\"V2A\">Network</a></div>
				<div class=\"menu\"><a href=\"/infocam/Email\" class=\"V2A\">E-mail</a></div>
				<div class=\"menu\"><a href=\"/infocam/Wireless\" class=\"V2A\">Wireless</a></div>
				<div class=\"menu\"><a href=\"/infocam/CardSharing\" class=\"V2A\">Card Sharing</a></div>
				<div class=\"menu\"><a href=\"/infocam/System\" class=\"V2A\">System</a></div>
				<div class=\"clear\"></div>
			</div>
			<div class=\"clear\"></div>
		</div>
	</div>
	<div class=\"margenBottom20\"></div>
	<div class=\"contCuerpo\">
		<div class=\"cuerpoTop\"></div>
		<div class=\"cuerpo\"><strong>Start</strong>
			<div class=\"cuerpolinea\"></div>
			<div class=\"cuerpoizq\">
				<ul>
					<li>Start</li>
				</ul>	
			</div>
			<div class=\"cuerpoder V1N\">
				<p><strong>Welcome to Infocam</strong></p>
			</div>
			<div class=\"clear\"></div>	
		</div>

		<div class=\"cuerpoBot\"></div>
	</div>
	<div class=\"margenBottom20\"></div>
</body>
</html>
");

    }
}
