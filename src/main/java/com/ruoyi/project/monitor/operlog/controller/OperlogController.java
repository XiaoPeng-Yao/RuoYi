package com.ruoyi.project.monitor.operlog.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.ruoyi.framework.aspectj.lang.annotation.Log;
import com.ruoyi.framework.web.controller.BaseController;
import com.ruoyi.framework.web.domain.JSON;
import com.ruoyi.framework.web.page.PageUtilEntity;
import com.ruoyi.framework.web.page.TableDataInfo;
import com.ruoyi.project.monitor.operlog.domain.OperLog;
import com.ruoyi.project.monitor.operlog.service.IOperLogService;

/**
 * 操作日志记录
 * 
 * @author ruoyi
 */
@Controller
@RequestMapping("/monitor/operlog")
public class OperlogController extends BaseController
{
    private String prefix = "monitor/operlog";

    @Autowired
    private IOperLogService operLogService;

    @GetMapping()
    public String logininfor()
    {
        return prefix + "/operlog";
    }

    @GetMapping("/list")
    @ResponseBody
    public TableDataInfo list()
    {
        PageUtilEntity pageUtilEntity = this.getPageUtilEntity();
        List<OperLog> list = operLogService.pageInfoQueryOperLog(pageUtilEntity);
        TableDataInfo tableDataInfo = new TableDataInfo(list, pageUtilEntity.getTotalResult());
        return tableDataInfo;
    }

    @Log(title = "监控管理", action = "操作日志-批量删除")
    @PostMapping("/batchRemove")
    @ResponseBody
    public JSON batchRemove(@RequestParam("ids[]") Long[] ids)
    {
        int rows = operLogService.batchDeleteOperLog(ids);
        if (rows > 0)
        {
            return JSON.ok();
        }
        return JSON.error();
    }
}
