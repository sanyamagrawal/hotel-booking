var SlideShow = function() {

    function show(node) {
        node.classList.remove("hide");
        node.classList.add("show");
    }

    function hide(node) {
        node.classList.remove("show");
        node.classList.add("hide");
    }

    function displayNavigation() {
        var navigationNode = document.getElementById("slideshow-nav"),
            imagesNode = document.getElementById("slideshow-wrapper"),
            images = imagesNode.getElementsByTagName("img"),
            length = images.length,
            count = 0,
            radioNode;

        for (; count < length; count++) {
            radioNode = document.createElement("input");
            radioNode.setAttribute("type", "radio");
            radioNode.setAttribute("id", count);
            radioNode.setAttribute("name", "slideShow-images");
            if (count === 0) {
                radioNode.setAttribute("checked", "checked");
            }
            radioNode.addEventListener("change", radioButtonChanged);

            navigationNode.appendChild(radioNode);
        }
    }

    function radioButtonChanged(event) {
        var id = event.id || parseInt(event.target.id, 10),
            imgage = document.getElementById("slideshow-wrapper").getElementsByTagName("img")[id],
            sibling = siblings(imgage);

        hideAll(sibling);
        show(imgage);
        return false;
    }

    function siblings(element) {
        var parentNode = element.parentNode,
            children = parentNode.childNodes,
            length = children.length,
            siblingArray = [],
            count,
            child;

        for (count = 0; count < length; count++) {
            child = children[count];

            if (child.nodeType === 1 && child.tagName.toLowerCase() === "img" && child !== element) {
                siblingArray.push(child);
            }
        }
        return siblingArray;
    }

    function hideAll(elements) {
        var len = elements.length,
            i;
        for (i = 0; i < len; i++) {
            var element = elements[i];
            element.classList.add("hide");

        }
    }

    function autoStart(event) {
        var links = document.getElementById('slideshow-nav').getElementsByTagName('input'),
            length = links.length,
            count = 0,
            link,
            loop,
            intervalCount = 1;

        for (count = 0; count < length; count++) {
            link = links[count];
            if (link.checked) {
                break;
            }
        }
        count++;
        for (loop = count; loop < length; loop++) {

            (function(index) {
                setTimeout(function() {
                    links[index].checked = true;
                    radioButtonChanged(links[index]);
                }, 2000 * intervalCount++);
            })(loop);
        }
    }

    return {
        show: displayNavigation,
        autoStart: autoStart
    };

}();