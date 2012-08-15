PHONES = {
	'AA' => 'a',
	'AE' => 'a-e',
	'AH' => 'A',
	'AO' => 'O',
	'AW' => 'a-u',
	'AY' => 'a-i',
	'B'  => 'zp',
	'CH' => 'c',
	'D'  => 'zt',
	'DH' => 'zT',
	'EH' => 'e',
	'ER' => 'Er',
	'EY' => 'e-i',
	'F'  => 'f',
	'G'  => 'zk',
	'HH' => 'h',
	'IH' => 'I',
	'IY' => 'i',
	'JH' => 'zc',
	'K'  => 'k',
	'L'  => 'l',
	'M'  => 'm',
	'N'  => 'n',
	'NG' => 'N',
	'OW' => 'o',
	'OY' => 'o-i',
	'P'  => 'p',
	'R'  => 'r',
	'S'  => 's',
	'SH' => 'S',
	'T'  => 't',
	'TH' => 'T',
	'UH' => 'U',
	'UW' => 'u',
	'V'  => 'zf',
	'W'  => 'w',
	'Y'  => 'y',
	'Z'  => 'zs',
	'ZH' => 'zS'
}

while line = gets
	next if line =~ /^;;;/

	if line =~ /^([^ ]+)  (.*)$/
		name, phones = $1, $2

		out = phones.split(' ').map { |ph| PHONES[ph.sub(/\d$/,'')] || raise('unknown phone: ' + ph) }.join('')

		puts "#{name.gsub('-',' ').downcase}\t#{out}"
	end
end
