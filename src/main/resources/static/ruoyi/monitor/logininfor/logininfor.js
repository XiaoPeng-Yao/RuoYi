var prefix = "/monitor/logininfor"

$(function() {
		var columns = [{
	        checkbox: true
	    },
	    {
            field: 'infoId',
            // 列字段名
            title: '访问编号' // 列标题
        },
        {
            field: 'loginName',
            title: '登录名称'
        },
        {
            field: 'ipaddr',
            title: '主机'
        },
        {
            field: 'browser',
            title: '浏览器'
        },
        {
            field: 'os',
            title: '操作系统'
        },
        {
            field: 'status',
            title: '登录状态',
            align: 'center',
            formatter: function(value, row, index) {
                if (value == 0) {
                    return '<span class="label label-success">成功</span>';
                } else if (value == 1) {
                    return '<span class="label label-primary">失败</span>';
                }
            }
        },
        {
            field: 'loginTime',
            title: '登录时间'
        }];
	var url = prefix + "/list";
    initTable(columns, url);
});

function batchRemove() {
	var rows = getIdSelections("infoId");
	if (rows.length == 0) {
		layer.msg("请选择要删除的数据");
		return;
	}
	layer.confirm("确认要删除选中的" + rows.length + "条数据吗?",{icon: 3, title:'提示'},function(index){
		$.ajax({
		    type: 'POST',
		    data: { "ids": rows },
		    url: prefix + '/batchRemove',
		    success: function(r) {
		        if (r.code == 0) {
		        	layer.msg(r.msg, { icon: 1, time: 1000 });
		            refresh();
		        } else {
		        	layer.alert(r.msg, {icon: 2, title:"系统提示"});
		        }
		    }
		});
	});
}
