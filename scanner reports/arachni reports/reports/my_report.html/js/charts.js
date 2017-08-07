function index_to_shortname( index ){
    return ["sql_injection_timing","code_injection_timing","os_cmd_injection_timing","csrf","sql_injection_differential","no_sql_injection_differential","xss","xss_tag","xss_script_context","sql_injection","backdoors","backup_directories","backup_files","common_directories","unencrypted_password_forms","common_files","password_autocomplete","x_frame_options","html_objects","http_only_cookies","interesting_responses"][index];
}

function index_to_severity( index ){
    return {"sql_injection_timing":"high","code_injection_timing":"high","os_cmd_injection_timing":"high","csrf":"high","sql_injection_differential":"high","no_sql_injection_differential":"high","xss":"high","xss_tag":"high","xss_script_context":"high","sql_injection":"high","backdoors":"high","backup_directories":"medium","backup_files":"medium","common_directories":"medium","unencrypted_password_forms":"medium","common_files":"low","password_autocomplete":"low","x_frame_options":"low","html_objects":"informational","http_only_cookies":"informational","interesting_responses":"informational"}[index_to_shortname(index)];
}

function renderCharts() {
    if( window.renderedCharts )
    window.renderedCharts = true;

    c3.generate({
        bindto: '#chart-issues',
        data: {
            columns: [
                ["Trusted",0,0,1,2,6,3,19,8,12,1,1,3,1,5,1,3,1,1,2,3,25],
                ["Untrusted",9,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                ["Severity",4,4,4,4,4,4,4,4,4,4,4,3,3,3,3,2,2,2,1,1,1]
            ],
            axes: {
                Severity: 'y2'
            },
            type: 'bar',
            groups: [
                ['Trusted', 'Untrusted']
            ],
            types: {
                Severity: 'line'
            },
            onclick: function (d) {
                var location;

                if( d.name.toLowerCase() == 'severity' ) {
                    location = 'summary/issues/trusted/severity/' + index_to_severity(d.x);
                } else {
                    location = 'summary/issues/' + d.name.toLowerCase() + '/severity/' +
                        index_to_severity(d.x) + '/' + index_to_shortname(d.x);
                }

                goToLocation( location );
            }
        },
        regions: [{"class":"severity-high","start":0,"end":10},{"class":"severity-medium","start":11,"end":14},{"class":"severity-low","start":15,"end":17},{"class":"severity-informational","start":18}],
        axis: {
            x: {
                type: 'category',
                categories: ["Blind SQL Injection (timing attack)","Code injection (timing attack)","Operating system command injection (timing attack)","Cross-Site Request Forgery","Blind SQL Injection (differential analysis)","Blind NoSQL Injection (differential analysis)","Cross-Site Scripting (XSS)","Cross-Site Scripting (XSS) in HTML tag","Cross-Site Scripting (XSS) in script context","SQL Injection","A backdoor file exists on the server","Backup directory","Backup file","Common directory","Unencrypted password form","Common sensitive file","Password field with auto-complete","Missing 'X-Frame-Options' header","HTML object","HttpOnly cookie","Interesting response"],
                tick: {
                    rotate: 15
                }
            },
            y: {
                label: {
                    text: 'Amount of logged issues',
                    position: 'outer-center'
                }
            },
            y2: {
                label: {
                    text: 'Severity',
                    position: 'outer-center'
                },
                show: true,
                type: 'category',
                categories: [1, 2, 3, 4],
                tick: {
                    format: function (d) {
                        return ["Informational","Low","Medium","High"][d - 1]
                    }
                }
            }
        },
        padding: {
            bottom: 40
        },
        color: {
            pattern: [ '#1f77b4', '#d62728', '#ff7f0e' ]
        }
    });

    c3.generate({
        bindto: '#chart-trust',
        data: {
            type: 'pie',
            columns: [["Trusted",98],["Untrusted",12]]
        },
        pie: {
            onclick: function (d) { goToLocation( 'summary/issues/' + d.id.toLowerCase() ) }
        },
        color: {
            pattern: [ '#1f77b4', '#d62728' ]
        }
    });

    c3.generate({
        bindto: '#chart-elements',
        data: {
            type: 'pie',
            columns: [["form",44],["link",11],["cookie",14],["body",2],["server",39]]
        }
    });

    c3.generate({
        bindto: '#chart-severities',
        data: {
            type: 'pie',
            columns: [["high",65],["medium",10],["low",5],["informational",30]]
        },
        color: {
            pattern: [ '#d62728', '#ff7f0e', '#ffbb78', '#1f77b4' ]
        },
        pie: {
            onclick: function (d) {
                goToLocation( 'summary/issues/trusted/severity/' + d.id );
            }
        }
    });

}
