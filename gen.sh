
cd "$1"

git pull 2>/dev/null

echo "<link rel='stylesheet' href='style.css'/><script src='ts.js'></script>"

for branch in $(cat channels); do
	echo "<div><span class='i' id='i$branch'></span> $branch last updated: <span class='l' id='l$branch'>$(git log -1 --format=%cd $branch)</span></div><script>cl('l$branch','i$branch',$(git log -1 --format=%cd --date=unix $branch))</script>"
done

