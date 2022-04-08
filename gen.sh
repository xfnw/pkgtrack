
cd "$1"

git pull >/dev/null 2>&1

title="$(basename $1) channel status"
echo "<!DOCTYPE html><title>$title</title><meta name='viewport' content='width=device-width, initial-scale=1'><link rel='stylesheet' href='style.css'/><script src='ts.js'></script><h1>$title</h1>"

for branch in $(cat channels); do
	echo "<div><span class='i' id='i$branch'></span> $branch last updated: <span class='l' id='l$branch'>$(git log -1 --format=%cd $branch)</span></div><script>cl('l$branch','i$branch',$(git log -1 --format=%cd --date=unix $branch))</script>"
done

