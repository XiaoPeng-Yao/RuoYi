package com.ruoyi.system.dto;

import lombok.Data;

import java.io.Serializable;
@Data
public class AssetNetUsed implements Serializable {
    private static final long serialVersionUID = 1L;
    private String key;
    private Integer value;
}
