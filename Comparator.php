<?php
error_reporting(E_ALL);

class Comparator {
		
	private $text;
	private $pattern;
	private $result;
	function __construct($seq, $pattern){	
		$this->text =$seq;
		$this->pattern=$pattern;
		$this->doSearch();	
	}
	
	public function getPositions(){				
		return 	$this->result[0];		
	}	
		
	private function doSearch(){ 
		$sp = $this->pattern;
		$replacements = array(
					     "A"=>"A",
					     "T"=>"T",
					     "G"=>"G",
					     "C"=>"C",
						 "R"=>"[GA]",
		                 "Y"=>"[TC]",
		                 "K"=>"[GT]",
                         "M"=>"[AC]",
                         "S"=>"[GC]",
                         "W"=>"[AT]",
                         "B"=>"[GCT]",
                         "D"=>"[AGT]",
                         "H"=>"[ACT]",
                         "V"=>"[ACG]",
                         "N"=>"[AGTC]" );
		$patronReg = "*";
		$letters = str_split($sp);
		foreach ($letters as $letter) {
			$patronReg = $patronReg.$replacements[$letter];	
		}
		$patronReg = $patronReg."*";
		preg_match_all($patronReg, $this->text, $matches, PREG_OFFSET_CAPTURE);
		$this->result = $matches[0];

	}
	
	public function getMatches(){
		$res = array();
		$long = strlen($this->text);
		$long2 = strlen($this->pattern);
		foreach ($this->result as $match) {
			$res[] = $long-$match[1]+$long2;
		}
		return $res;
	}

	public function getSequence() {
		return $this->text;
	}
	
	public function setSequence($x){	
		$this->text=$x;		
	}
	

	public function getPattern() {
		return $this->pattern;
	}
	
	public function setPattern($x){
		$this->pattern=$x;		
	}
}

?>
	
