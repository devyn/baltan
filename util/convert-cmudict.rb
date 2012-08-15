C = {
	'B'  => 'zp',
	'CH' => 'c',
	'D'  => 'zt',
	'DH' => 'zT',
	'F'  => 'f',
	'G'  => 'zk',
	'HH' => 'h',
	'JH' => 'zc',
	'K'  => 'k',
	'L'  => 'l',
	'M'  => 'm',
	'N'  => 'n',
	'NG' => 'N',
	'P'  => 'p',
	'R'  => 'r',
	'S'  => 's',
	'SH' => 'S',
	'T'  => 't',
	'TH' => 'T',
	'V'  => 'zf',
	'W'  => 'w',
	'Y'  => 'y',
	'Z'  => 'zs',
	'ZH' => 'zS'
}

V = {
	'AA' => 'a',
	'AE' => 'a-e',
	'AH' => 'A',
	'AO' => 'O',
	'AW' => 'a-u',
	'AY' => 'a-i',
	'EH' => 'e',
	'EY' => 'e-i',
	'IH' => 'I',
	'IY' => 'i',
	'OW' => 'o',
	'OY' => 'o-i',
	'UH' => 'U',
	'UW' => 'u'
}

R = {
	'ER' => 'Er'
}

while line = gets
	next if line =~ /^;;;/

	if line =~ /^([^ ]+)  (.*)$/
		name, phones, out = $1, $2, ''

		need_stop = true
		phones.split(' ').each do |ph|
			ph.sub!(/\d$/,'')
			if r = R[ph]
				out << (need_stop ? 'x' : '') << r
				need_stop = false
			elsif v = V[ph]
				out << (need_stop ? 'x' : '') << v
				need_stop = true
			elsif c = C[ph]
				out << c
				need_stop = false
			else
				raise "unknown phoneme: #{ph}"
			end
		end

		puts "#{name.gsub('-',' ').downcase}\t#{out}"
	end
end
