<SCRIPT type="text/javascript">
<!-- Hide script contents from old browsers

    var IE4 = (document.all && !document.getElementById) ? true : false;
    var NS4 = (document.layers) ? true : false;
    var IE5 = (document.all && document.getElementById) ? true : false;
    var NS6 = (document.getElementById && !document.all) ? true : false;
    var IE  = IE4 || IE5;
    var NS  = NS4 || NS6;
    var Mac = (navigator.platform.indexOf("Mac") == -1) ? false : true;

    var sheet;

    if( NS4 )
    {
        sheet = "jspwiki_ns.css";
    }
    else if( Mac )
    {
        sheet = "jspwiki_mac.css";
    }
    else
    {
        // Let's assume all the rest of the browsers are sane
        // and standard's compliant.
        sheet = "jspwiki_ie.css";
    }

    document.write("<link rel=\"stylesheet\" href=\"templates/default/"+sheet+"\">");

// end hiding contents from old browsers -->
</SCRIPT>
<NOSCRIPT>
    <!-- User has no JavaScript support.  Thus, it is unlikely that
         his stylesheets would work either.  So, no stylesheets. -->
</NOSCRIPT>

<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=<wiki:ContentEncoding />">
<LINK REL="search" HREF="<wiki:LinkTo format="url" page="FindPage"/>"            TITLE="Search <wiki:Variable var="ApplicationName" />">
<LINK REL="help"   HREF="<wiki:LinkTo format="url" page="TextFormattingRules"/>" TITLE="Help">
<LINK REL="start"  HREF="<wiki:LinkTo format="url" page="Main"/>"                TITLE="Front page">
