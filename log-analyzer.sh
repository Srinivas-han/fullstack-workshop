data="C:\Users\madhu\fullstack-workshop\Linux\sample-log.txt"
if [ -f "$data" ];  then
   echo "exists"
fi

echo "the file contains $(wc -l <"$data")lines"
echo "info : $(grep -i -c "info" "$data")"
echo "warning : $(grep -i -c "warning" "$data")"
echo "error : $(grep -i -c "error" "$data")"
echo "uniq ip adress found IP_LIST=$(grep -oE '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' "$data" | sort | uniq)"

