package com.ruoyi.project.monitor.operlog.controller;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.ruoyi.framework.aspectj.lang.annotation.Log;
import com.ruoyi.framework.web.controller.BaseController;
import com.ruoyi.framework.web.domain.JSON;
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

    @RequiresPermissions("monitor:operlog:view")
    @GetMapping()
    public String logininfor()
    {
        return prefix + "/operlog";
    }

    @RequiresPermissions("monitor:operlog:view")
    @GetMapping("/list")
    @ResponseBody
    public TableDataInfo list()
    {
        TableDataInfo rows = operLogService.pageInfoQueryOperLog(getPageUtilEntity());
        return rows;
    }

    @RequiresPermissions("monitor:operlog:batchRemove")
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

    @RequiresPermissions("monitor:operlog:detail")
    @GetMapping("/detail/{operId}")
    public String detail(@PathVariable("operId") Long deptId, Model model)
    {
        OperLog operLog = operLogService.selectOperLogById(deptId);
        model.addAttribute("operLog", operLog);
        return prefix + "/detail";
    }
}
