<?php 
  
  $path = "http://" . dirname($_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']);
  //$path = ".";

?>


<link rel="stylesheet" href="<?= $path ?>/js/squaire-js/squaire.min.css"/>
<link rel="stylesheet" href="<?= $path ?>/js/bootstrap/css/bootstrap.min.css"/>

<h5>Embed code (copy and paste): </h5>
	
	<code>
	<?= htmlspecialchars('<div id="road_condition_interactive"></div>
<script type="text/javascript" src="' . $path  . '/js/pym.min.js"></script>
<script>
    var pymParent = new pym.Parent("road_condition_interactive", "' . $path  . '/index.php", {polling:500});
</script>'); ?>
	</code>

<hr>

<div id="road_condition_interactive"></div>
<script type="text/javascript" src="<?= $path ?>/js/pym.min.js"></script>
<script>
    var pymParent = new pym.Parent("road_condition_interactive", "<?= $path ?>/index.php", {polling:500});
</script>
