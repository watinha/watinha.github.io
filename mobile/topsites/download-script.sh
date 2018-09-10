for i in `cat url.txt`; do
    echo `Downloading => $i...`
    wget -F -r -l 1 -p -k --user-agent="Mozilla/5.0 (iPhone; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.25 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1" $i
done

