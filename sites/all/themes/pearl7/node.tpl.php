<section <?php print $content_attributes ?>>
    <?php
        require_once $_SERVER['DOCUMENT_ROOT'] . '/kint/Kint.class.php';
   // d($content);


//text = "Welcome to [city]. I want [city] to be a random version each time. [city] should not be the same [city] each time.";
$text = render($content);  
$keyword = "[color]";
$values = array("red", "orange", "blue", "green", "yellow", "black");

$result = preg_replace_callback('/' . preg_quote($keyword) . '/', 
  function() use ($values){ return $values[array_rand($values)]; }, $text);

$text = $result;
$keyword = "[byte]";
$result = preg_replace_callback('/' . preg_quote($keyword) . '/', 
  function() use ($values){ return mt_rand( 0, 255 ); }, $text);
/*
$haystack = 'mouse, I like mouse, mouse.';
$needle   = 'mouse';
$haystack_parts = explode( $needle, $haystack );

$output = array_shift( $haystack_parts );

while ( ! empty( $haystack_parts ) )
{
    $output .= mt_rand( 5, 10 );
    $output .= array_shift( $haystack_parts );
}
*/
		
		print($result);   
    ?>
</section>